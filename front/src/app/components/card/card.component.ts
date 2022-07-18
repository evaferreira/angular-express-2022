import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  // @Input() indica que este dato se va a recibir desde el componente padre
  // podemos declarar un valor predeterminado usando el =
  @Input() imagen? = "assets/viajes/melbourne.jpg";

  // La | es un OR
  // categoria puede recibir un string O puede no recibir nada
  @Input() categoria: string | undefined;
  @Input() titulo: string | undefined;
  @Input() contenido: string | undefined;
  @Input() destacado? = false;
  @Input() precio: number | undefined;

  numeros = [56, 23, 78, 235, 898, 2323];

  ngOnInit(): void {
  }

}
