import { Component, OnInit } from '@angular/core';
// Importamos el servicio de gatitos
import { GatitosService } from 'src/app/services/gatitos.service';

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
    private gatitosService: GatitosService
  ) { }

  data: any;

  mostrarInfoGatitos () {
    this.gatitosService.getGatitosInfo().subscribe(respuesta => {
      console.log(respuesta);
      this.data = respuesta;
    });
  }

  // onInit significa cuando se termina de cargar el componente
  ngOnInit(): void {
    this.mostrarInfoGatitos();
  }

}
