import { Component, OnInit, ViewChild } from '@angular/core';
 //NECESARIO PARA MANERA B
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data = Array(20);

  //NECESARIO PARA MANERA B
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;

  constructor() { }

  ngOnInit() {
  }

  //una ves que hace scroll hacia abajo, se ejecuta el metodo loadData
  loadData(event: any){
    console.log(event);
    // MANERA A, solo esto.. 
    // setTimeout(() => {
    //   if(this.data.length > 150){
    //     event.target.complete();
    //     this.data.push(...Array(20));
    //     //una ves finalizada la carga de datos, deshabilitamos el infinite scroll con event.target.disabled = true;
    //     event.target.disabled = true;
    //     return;
    //   }
    //   this.data.push(...Array(20));
    //   event.target.complete();
    // }, 1000);

    //MANERA B
    setTimeout(() => {
      //esto solo necesario para validar que sea el ultimo scroll si hay mas de 150
      if (this.data.length > 150) {
        this.infiniteScroll?.complete();
        if(this.infiniteScroll){
          this.infiniteScroll.disabled = true;
        }        
        return;
      }
      //sino directamente dejo esto
    const nuevoArr = Array(20);
    this.data.push(...nuevoArr);
    this.infiniteScroll?.complete();

    },1500);
  }


}
