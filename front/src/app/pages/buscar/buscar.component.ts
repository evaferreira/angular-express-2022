import { Component, OnInit } from '@angular/core';
// Importamos la configuración básica de formularios de Angular
import { FormControl, FormGroup } from '@angular/forms';
// Importamos el libreria Service
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  // Acá declaramos el formulario, indicando los campos que tiene
  // Al campo de termino le agregamos '' para indicarle que de manera predeterminada va a estar vacío
  busquedaForm = new FormGroup({
    termino: new FormControl(),
  });

  constructor(
    private libreriaService: LibreriaService
  ) { }

  onSubmit () {
    console.log('VAS RE BIEN');
    // Llamar al servicio y enviarle a la función findBooks el término

    // Conseguir el dato de lo que tipeó el usuario
    const { termino } = this.busquedaForm.value;

    this.libreriaService.findBooks(termino).subscribe(libros => {
      console.log('Resultados', libros);
    });
  }

  ngOnInit(): void {
  }

}
