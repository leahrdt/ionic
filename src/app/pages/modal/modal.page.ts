import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async mostrarModal() {
    //funcion para que se levante el modal-info, modal-info es una page.
    //..de esta manera lo convertimos en modal
    //MANDAR INFO AL COMPONENTE MODAL
    //Aqui, como el modal no es parte del html, no podemos pasarle parametros
    //..como lo hacemos con las paginas, por lo que tenemos que usar el metodo
    //..create, que nos permite pasarle parametros
    //..esto se hace con componentProps, y dentro un objeto
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Leandro',
        pais: 'Argentina'
      }
    })
    await modal.present();

    //Queda escuchando al modal a ver si devuelve algo...
    //.. este lo hace con la funcion onDidDismiss
    //Esta se ejecuta una vez cerrado el modal, tambien existe onWillDismiss, la diferencia..
    //..es que onDidDismiss se ejecuta cuando el modal ya se cerro, y onWillDismiss se ejecuta..
    //..antes de que se cierre
    const respuestaDelModal = await modal.onDidDismiss();
    console.log(respuestaDelModal);

}


}
