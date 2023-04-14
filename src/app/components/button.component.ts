import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string;
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['Vender', 'Comprar'];
  buttonNumber: number = 1;
  buttonObjet = {
    label: 'Adicionar ao carrinho',
  };

  getAlert(num: number) {
    alert(num);
  }
}
