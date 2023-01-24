import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {


  @Input () item: any = {};
  
  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true
    });
    await popover.present();

    //Obtener la info del opoover hijo
    //Con esta info queda escuchando al hijo
    const { data } = await popover.onWillDismiss();
    console.log('Padre:', data);
  }

}
