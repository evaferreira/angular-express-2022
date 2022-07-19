import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
  constructor(
    private http: HttpClient
  ) { }

  getBooks () {
    return this.http.get('/api/libros');
  }
}