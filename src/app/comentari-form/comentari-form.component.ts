import { Component, OnInit } from '@angular/core';
import { COMENTARI } from '../comentari';
import { Comentari } from '../comentari';
import { RECEPTES } from '../receptes';
import axios from 'axios';

@Component({
  selector: 'app-comentari-form',
  templateUrl: './comentari-form.component.html',
  styleUrls: ['./comentari-form.component.css']
})

export class ComentariFormComponent implements OnInit {

  constructor() { }

  recep = RECEPTES;
  coment = COMENTARI;
  id_time = Date.now();
  form_coment: Comentari = new Comentari;

  hoy = new Date();
  dd = String(this.hoy.getDate()).padStart(2, '0');
  mm = String(this.hoy.getMonth() + 1).padStart(2, '0');
  yyyy = this.hoy.getFullYear();

  date = this.dd + '/' + this.mm + '/' + this.yyyy;


  crearComentari(){

    this.form_coment.id = this.id_time;
    this.form_coment.date = this.date;
    this.coment.push(this.form_coment);
    this.form_coment= new Comentari;
    var date = this.dd + '/' + this.mm + '/' + this.yyyy;
    var id:any;
    var i:any = 0;
    for (i in RECEPTES) {
      if(RECEPTES[i].name==this.form_coment.nom_recepta){
        RECEPTES[i].id = id;
      }

      let comentaris: Comentari[] = [];
      
      var comentari2 = new Comentari;

      comentari2.starts = this.form_coment.starts;
      comentari2.description = this.form_coment.description;
      comentari2.date = date;

      comentaris.push(comentari2);

    axios.put('http://localhost:3000/receptes/'+id, {

      nom: RECEPTES[i].name,
      elaboracio: RECEPTES[i].description,
      ingredients: RECEPTES[i].ingredients,
      reviews: comentaris,
      id: id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  }
  ngOnInit(): void {
  }

}
