import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../Interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

     getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
      }

      getMenuOpts() {
        return this.http.get<Componente[]>('/assets/data/menu-opts.json');
      }

      getAlbums() {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
      }
      getSuperHeroes() {
        // este pipe es especial para hacer un delay, y asi tarda un ratito en dar la respuesta
        return this.http.get<Componente[]>('/assets/data/superheroes.json')
        .pipe(
          delay(1500)
          );
      }
}
