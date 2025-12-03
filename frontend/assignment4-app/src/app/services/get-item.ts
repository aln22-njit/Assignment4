import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
Observable


@Injectable({
  providedIn: 'root',
})
export class GetItem {
  http = inject(HttpClient);

  getItem(): Observable<string[][]>{
    const url = "http://localhost:5500/api/getItem"
    return this.http.get<string[][]>(url)
  }

  
}
