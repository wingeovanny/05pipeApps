import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2345678.897;
  porcentaje: number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
