import { Color, Heroe } from './../../interfaces/ventas.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {

  ordenarPOr: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Darevil',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Linterna verde',
      vuela: false,
      color: Color.verde
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  aplicarPipe: boolean = false;


  cambiar() {
    this.aplicarPipe = !this.aplicarPipe;
  }

  cambiarOrden(value: string) {
    this.ordenarPOr = value;
  }

}
