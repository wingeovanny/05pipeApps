import { Heroe } from './../interfaces/ventas.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[],): Heroe[] {

    value = value.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

    return value;
  }

}
