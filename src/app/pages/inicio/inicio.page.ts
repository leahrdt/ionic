import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../Interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!:Observable<Componente[]>;

  constructor(
    private menuCrtl: MenuController,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    // Importo El MenuController, e indico que habra el que tiene como id 'firstMenuMio'
    this.menuCrtl.open('firstMenuMio');
  }


}
