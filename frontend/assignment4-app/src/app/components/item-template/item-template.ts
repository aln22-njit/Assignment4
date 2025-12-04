import { Component, inject } from '@angular/core';
import { GetItem } from '../../services/get-item';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';




@Component({
  selector: 'app-item-template',
  imports: [CommonModule],
  templateUrl: './item-template.html',
  styleUrl: './item-template.css',
})
export class ItemTemplate {
    serverMessage: string = '';

    getItemService = inject(GetItem);
    
    localCurrentItem$ = this.getItemService.getCurrentItem()

    submitClicked(){
      this.getItemService.submitOrder().subscribe({
    next: response => {
      
      this.serverMessage = response.message;
      
      alert(this.serverMessage);
      
    },
    error: err => console.error("POST error:", err)
  });
      
    }

   
}
