import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  constructor(private loadingCrtl : LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading() {
    console.log('Mostrar loading');
  }

  async presentLoading() {

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
    
    this.loading = await this.loadingCrtl.create({
      message: 'Please wait...',
      // duration: 2000
    });

    await this.loading.present();
  }


}
