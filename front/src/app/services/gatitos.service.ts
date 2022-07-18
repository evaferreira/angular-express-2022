import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatitosService {

  // Definimos de manera predeterminada que el GatitosService siempre va a utilizar HttpClient
  constructor(
    private http: HttpClient
  ) { }

  getGatitosInfo () {
    return this.http.get('https://catfact.ninja/fact');
  }

}
