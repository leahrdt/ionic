import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

albumes: any[] = [];
textoBuscar: string = '';

  constructor(private dataServices :DataService ) { }

  ngOnInit() {
    this.dataServices.getAlbums().subscribe((albumes:any)  => {
      this.albumes = albumes;
      console.log(albumes);
    });
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);
    //voy a llenar mi texto buscar, con el valor que viene del input.
    //Luego desde el html, voy a llamar a mi pipe y le voy a pasar el textoBuscar
    this.textoBuscar = event.detail.value;
  }

}
