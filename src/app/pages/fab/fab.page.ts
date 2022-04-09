import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  // Color Generator
  // https://ionicframework.com/docs/theming/color-generator/

  // Crear variable de SCSS global de ionic
  // https://gist.github.com/Klerith/fed51f1152d9c35fbc694f4b6aee07ac

  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
