import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ItemTemplate } from '../item-template/item-template';

@Component({
  selector: 'app-purchase',
  imports: [Header, ItemTemplate],
  templateUrl: './purchase.html',
  styleUrl: './purchase.css',
})
export class Purchase {

}
