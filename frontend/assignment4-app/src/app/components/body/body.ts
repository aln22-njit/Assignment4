import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetItem } from '../../services/get-item';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  imports: [RouterLink, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
  standalone: true
})
export class Body{
    
    getItemService = inject(GetItem);
    allItems$ = this.getItemService.getItem();

    
    selectedItem(item: string[]){
      this.getItemService.currentItem = item;
      console.log(this.getItemService.currentItem);

      this.getItemService.sendItem();
    }
    
}
