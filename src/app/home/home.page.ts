import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  //metodo para fechar o app sem matar a aplicação por completo!
  sairDoApp() {
    navigator['app'].exitApp();
  }
  

}
