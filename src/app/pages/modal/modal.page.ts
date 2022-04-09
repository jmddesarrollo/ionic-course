import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async mostrarModal() {

    // Creación del modal pasando información del componente padre al modal hijo
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Rafael Nadal',
        pais: 'España'
      }
    });
    
    await modal.present();

    // onDidDismiss:  En el momento en el que se cierra completamente el modal
    // onWillDismiss: En el momento en el que se inicia el cierra del modal (se recoge antes que en onDidDimiss)

    // const { data } = await modal.onDidDismiss();
    const { data } = await modal.onWillDismiss();
    console.log('onWillDismiss');

    console.log(data);

  }

}
