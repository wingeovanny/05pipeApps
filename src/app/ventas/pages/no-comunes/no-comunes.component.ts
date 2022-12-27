import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = 'Edwin';
  genero: string = 'F';

  invitacionMapa = {
    'M': 'invitarlo',
    'F': 'invitrarla'
  }




  persona = {
    nombre: "Edwin",
    edad: 35,
    direccion: 'Ecuador'
  }

}
