import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'edwin'
  nombrecompleto: string = 'edwin bucay'
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
