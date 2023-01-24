import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  elYearSelected: number = 2020;

  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event: any){
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));
  }

  dameLaFecha(){
    //Esto funciona gracias al ngModel
    console.log(this.elYearSelected);
  }

}
