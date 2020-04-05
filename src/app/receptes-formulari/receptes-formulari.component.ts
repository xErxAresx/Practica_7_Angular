import { Component, OnInit } from '@angular/core';
import { RECEPTES } from '../receptes';
import { Receptes } from '../receptes';
import axios from 'axios';
import { Comentari } from '../comentari';

@Component({
  selector: 'app-receptes-formulari',
  templateUrl: './receptes-formulari.component.html',
  styleUrls: ['./receptes-formulari.component.css']
})
export class ReceptesFormulariComponent implements OnInit {

  constructor() { }

  recep = RECEPTES;
  id_time = Date.now();
  form_recep: Receptes = new Receptes;
  
  //He hagut de crear aquestes variables perque sino hem dona un error en la validació
  //I encara aixi hem continua donant error
  name;
  description_recepta;
  ingredients_recepta;
  
  crearRecepta(){

    this.form_recep.id = this.id_time;
    this.recep.push(this.form_recep);
    this.form_recep = new Receptes;
    let comentaris: Comentari[] = [];

    axios.post('http://localhost:3000/receptes', {
      nom: this.form_recep.name,
      elaboracio: this.form_recep.description,
      ingredients: this.form_recep.ingredients,
      reviews: comentaris,
      id: this.id_time
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  ngOnInit(): void {
  }

}
