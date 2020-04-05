import { Component, OnInit } from '@angular/core';
import { RECEPTES, Receptes } from '../receptes';
import { COMENTARI, Comentari } from '../comentari';
import axios from 'axios';

@Component({
  selector: 'app-receptes',
  templateUrl: './receptes.component.html',
  styleUrls: ['./receptes.component.css']
})
export class ReceptesComponent implements OnInit {

  recepta_edit: Receptes = new Receptes;
  comentari_json: Comentari = new Comentari;

  constructor() { }
  
  comentari = COMENTARI;
  recep = RECEPTES;
  searchbar='';
  selec='';
  selector="";

  onChange(deviceValue){
    this.selec=deviceValue;
  }

  //Funcio que hauria d'editar pero per alguna rao solament s'edita la primera recepta
  editarRecepta(nom_recepta){
    var i:any = 0;
       for (i in RECEPTES) {
         if(RECEPTES[i].name==nom_recepta){
           RECEPTES[i].name= this.recepta_edit.name;
           RECEPTES[i].description= this.recepta_edit.description;
           RECEPTES[i].ingredients= this.recepta_edit.ingredients;
         }
       }
 
     var id:any;
     var i:any = 0;
     for (i in RECEPTES) {
       if(RECEPTES[i].name==nom_recepta){
         RECEPTES[i].id = id;
       }
     }
       axios.put('http://localhost:3000/receptes/'+id, {
       nom: this.recepta_edit.name,
       elaboracio: this.recepta_edit.description,
       ingredients: this.recepta_edit.ingredients
       })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
   } 

   //He intentat crear ua funció per eliminar pero al final no se com fer-ho
   //I me quedat sense temps, he posat l'intent
  eliminarRecepta(nom_recepta){

    var id:any;
    var i:any = 0;
    for (i in RECEPTES) {
      if(RECEPTES[i].name==nom_recepta){
        RECEPTES[i].id = null;
        RECEPTES[i].description = null;
        RECEPTES[i].ingredients = null;
        RECEPTES[i].name = null;
      }
    }

      axios.delete('http://localhost:3000/receptes/'+id, {
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.selector = "Tria una de les opcions";

    axios.get('http://localhost:3000/receptes')
            .then(resp => {
                var data = resp.data;
                data.forEach(e => {
                  console.log(e.id);
                    this.recepta_edit.id=e.id;
                    this.recepta_edit.name=e.nom;
                    this.recepta_edit.description=e.elaboracio;
                    this.recepta_edit.ingredients=e.ingredients;
                    this.recep.push(this.recepta_edit);
                    this.recepta_edit = new Receptes();

                });
            })
            .catch(error => {
                console.log(error);
            });
            
    axios.get('http://localhost:3000/receptes')
            .then(resp => {
                var data = resp.data;
                data.forEach(e => {
                    this.comentari_json.nom_recepta=e.nom;  
                    e.reviews.forEach(c =>{
                      this.comentari_json.description=c.body;
                      this.comentari_json.starts=c.stars;
                      this.comentari_json.date=c.createdOn;
                      this.comentari.push(this.comentari_json);
                      this.comentari_json = new Comentari();
                    })
                    }); 
                  })
            .catch(error => {
                console.log(error);
            });
  }

}
