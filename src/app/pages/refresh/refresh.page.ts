import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  items: any[] = []
  constructor() { }

  ngOnInit() {
  }

  doRefresh(event : any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.items = Array(40);
      event.target.complete();
    }, 2000);
  }

}
