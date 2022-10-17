import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCategory (category : any) {
    return this.http.post<any>("https://localhost:7119/api/Category", category);
  }

  getCategory(){
    return this.http.get<any>("https://localhost:7119/api/Category");
  }
}



