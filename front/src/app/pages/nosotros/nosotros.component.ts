import { Component, OnInit } from '@angular/core';
// Importamos el servicio de gatitos
import { GatitosService } from 'src/app/services/gatitos.service';
// Importamos el servicio de libreria
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

// interface InfoGatitos {
//   fact: string;
//   length: number;
// }

export class NosotrosComponent implements OnInit {

  constructor(
    private gatitosService: GatitosService,
    private libreriaService: LibreriaService
  ) { }

  data: any;
  libros: any;

  mostrarInfoGatitos () {
    this.gatitosService.getGatitosInfo().subscribe(respuesta => {
      console.log(respuesta);
      this.data = respuesta;
    });

    // Llamamos a todos los libros
    this.libreriaService.getBooks().subscribe((libros: any) => {
      console.log(libros);
      this.libros = libros;
    });
  }

  // onInit significa cuando se termina de cargar el componente
  ngOnInit(): void {
    this.mostrarInfoGatitos();
  }

}
