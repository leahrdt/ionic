import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  nombre: string = '';
  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulariou: NgForm ) {
    console.log('submit');
    console.log(this.usuario);
    //Esta manera de ver la informacion del formulario, se envia desde el html..
    //..  #formulariou="ngForm" (ngSubmit)="onSubmit(formulariou)"
    // Justo aqui, donde se llama a la funcion onSubmit, se le pasa el parametro formulariou
    //Para hacer esto en el onSubmit se debe poner el parametro formulariou: NgForm
    console.log(formulariou);

  }

}
