import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetItem } from '../../services/get-item';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  imports: [RouterLink, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
  standalone: true
})
export class Body{
    
    getItemService = inject(GetItem);

    
    allItems$: Observable<string[][]> = this.getItemService.getItem();

    selectedItem(item: string[]){
      this.getItemService.currentItem = item;
      console.log(this.getItemService.currentItem);

      this.getItemService.sendItem();
    }
    
}
