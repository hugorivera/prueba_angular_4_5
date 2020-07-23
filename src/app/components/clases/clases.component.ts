import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta:string = 'alert-danger';
  loading = false;

  propiedades:Object = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  ejecutar(){
    this.loading = true;
    setTimeout(() => this.loading = false, 3500);
  }

}
