import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor() { }

  viajes = [
    {
      imagen: "assets/viajes/bergen.webp",
      categoria: "Paquete",
      titulo: "5 noches en Noruega",
      contenido: "Lorem ipsum sarasa blah",
      precio: 3456
    },
    {
      imagen: "assets/viajes/melbourne.jpg",
      categoria: "Vuelo",
      titulo: "Conocé Australia",
      contenido: "Lorem ipsum sarasa blah sa",
      destacado: true,
      precio: 4260
    },
    {
      imagen: "assets/viajes/londres.jpg",
      categoria: "Hotel",
      titulo: "Habitación en Hogwarts",
      contenido: "Lorem ipsum sarasa blah sa",
      destacado: true,
      precio: 7571
    },
    {
      imagen: "assets/viajes/medellin.jpg",
      categoria: "Vuelo",
      titulo: "Conocé Colombia",
      contenido: "Lorem ipsum sarasa blah sa",
      precio: 345
    },
  ];

  // imagen = "assets/viajes/bergen.webp";
  // categoria = "Vuelos";
  // titulo = "Viaja a Australia";
  // contenido = "Lorem ipsum sarasa blah";
  // destacado = false;
  // precio = 456;

  ngOnInit(): void {
  }

}
