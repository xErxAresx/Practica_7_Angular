  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'select',
    pure: false
    
  })

  //AMB AQUESTA FUNCIÓ REORGANITZO L'ARRAY DE LA CLASSE 
  export class SelectPipe implements PipeTransform {
    transform(values: any, args?: string): any {
      if(args.includes('Nom ASC')){   
        values.sort(function(a, b){
          var nameA=a.name;
          var nameB=b.name;
          if (nameA < nameB) {
            return -1;  
          }
          if (nameA > nameB){
            return 1;
          }
          return 0;
         });
      }
      if(args.includes('Nom DSC')){
        values.sort(function(a, b){
          var nameA=a.name;
          var nameB=b.name;
          if (nameA < nameB) {
            return 1;
          } 
          if (nameA > nameB){
            return -1;
          }
          return 0;
         });
      }
      if(args.includes('Ingredients ASC')){
        values.sort(function(a, b){
          var nameA=a.ingredients;
          var nameB=b.ingredients;
          if (nameA < nameB){
            return -1;
          }
          if (nameA > nameB){
            return 1;
          }
          return 0;
         });
      }
      if(args.includes('Ingredients DSC')){
        values.sort(function(a, b){
          var nameA=a.ingredients;
          var nameB=b.ingredients;
          if (nameA < nameB){
            return 1;
          }
           
          if (nameA > nameB){
            return -1;
          }
           
          return 0; 
         });
      }
      return values;
    }
  }
