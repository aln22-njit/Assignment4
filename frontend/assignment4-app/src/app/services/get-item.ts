import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
Observable


@Injectable({
  providedIn: 'root',
})
export class GetItem {
  http = inject(HttpClient);
  currentItem!: string[];  


  getItem(): Observable<string[][]>{
    const url = "http://localhost:5500/api/products"
    return this.http.get<string[][]>(url);
    
  }

  sendItem(){
    const url = "http://localhost:5500/api/select-product"
    
    this.http.post(url, this.currentItem).subscribe({
    next: response => console.log("Server response:", response),
    error: err => console.error("POST error:", err)
  });


    console.log("Sent to server: " + this.currentItem);
  }

  getCurrentItem(){
    const url = "http://localhost:5500/api/selected-product";

    return this.http.get<string[]>(url);
  }

  submitOrder(): Observable<{message: string}>{
    const url = "http://localhost:5500/api/submit-order";

    return this.http.post<{ message: string }>(url, this.currentItem);
    

    
  }

  
}
