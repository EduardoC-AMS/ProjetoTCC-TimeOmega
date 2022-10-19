import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCategory (data : any) {
    return this.http.post<any>("https://localhost:7119/api/Category", data);
  }

  getCategory(){
    return this.http.get<any>("https://localhost:7119/api/Category");
  }

  putCategory(data:any,id : number){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("https://localhost:7119/api/Category/"+ id ,info);

  }

  deleteCategory(id:number){
    return this.http.delete<any>("https://localhost:7119/api/Category/"+id);
  }
}



