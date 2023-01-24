import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
// value es el arreglo que se va a filtrar
// texto es el texto que se va a buscar
  transform(
     arreglo: any[], 
     filtro: string = '',
     campoAFiltrarDelObjeto : string = 'title'
     ): any[] {
    console.log('desde el pipe',arreglo)
    console.log('texto desde el pipe',filtro)
    console.log('variable del objeto a filtrar',campoAFiltrarDelObjeto)


    if(filtro.length === 0){
      return arreglo;
    }

   if(!arreglo){
     return [];
   }
    filtro = filtro.toLowerCase();
    return arreglo.filter(item => {
      return item[campoAFiltrarDelObjeto].toLowerCase().includes(filtro)
    }
    );
  }
}

