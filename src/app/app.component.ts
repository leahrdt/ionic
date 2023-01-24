import { Component ,OnInit,ViewChild} from '@angular/core';
import { Componente } from './Interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {

  componentes!:Observable<Componente[]>;

  @ViewChild(IonMenu) menu!: IonMenu;

  constructor(
    private dataService: DataService
  ) {}

  
  ngOnInit(): void {
    this.componentes = this.dataService.getMenuOpts();
  }

  closeMenu(){
    console.log('close menu');
    this.menu.close();
  }

}
