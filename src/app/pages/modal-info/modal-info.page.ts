import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre!: string;
  @Input() pais!: string;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  //Para que el modal se cierre, no pase nada
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  //Para que el modal se cierre y nos devuelva un argumento
  //Estos argumentso deben ser agarrados desde el componente que llamo al modal
  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'Leandriño',
      pais: 'Brasil'
    });
  }
}
