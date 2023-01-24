import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  //Forma 1
  // usuario: any[]  = [];

  //Forma 2
  usuarios!: Observable<any>;

  //Para poder usar el ion-list del html, aqui se debe importar el IonList
  //Y aqui se debe poner el decorador @ViewChild
  //Y aqui se debe poner el nombre del ion-list que se va a usar
  //Lo quiero para poder usar el metodo closeSlidingItems
  @ViewChild(IonList) ionList!: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Forma 1
    // this.dataService.getUsers()
    // .subscribe(console.log);

    //Forma 2
    this.usuarios = this.dataService.getUsers()
  }

  favorite(user: any) {
    console.log('favorite', user);
    //Para cerrar el ion-list
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user);
    //Para cerrar el ion-list
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user);
    //Para cerrar el ion-list
    this.ionList.closeSlidingItems();
  }



}