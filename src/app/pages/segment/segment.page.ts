import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>
  publisherType: string = '';

  constructor(
    private DataService : DataService
  ) { }

  ngOnInit() {
    let nose = this.DataService.getSuperHeroes()
    console.log(nose);
    this.superHeroes = this.DataService.getSuperHeroes();
    console.log(this.superHeroes)

  }

  segmentChanged(event : any){
    console.log(event.detail.value);
    //para traer todos mando un string vacio.
    //.. porque en el pipe estaba configurado de esta manera.. que si envio '' me devuelva todo
    if(event.detail.value === 'todos'){
      return this.publisherType = '';
    }
    return this.publisherType = event.detail.value;
  }

}
