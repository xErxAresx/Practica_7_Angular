import { Pipe, PipeTransform } from '@angular/core';
import { RECEPTES } from './receptes';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  recept = RECEPTES;
    
    transform(value: any, searchText: any): any {
      const resultatBuscar = [];
      
      for(const recepta of value){
        
        if(recepta.name.indexOf(searchText) > -1){
          resultatBuscar.push(recepta);
        };
      };
  
      return resultatBuscar;
    }
  }
