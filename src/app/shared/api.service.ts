import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {map} from  'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmploye(data :any){
     return this.http.post<any>("http://localhost:3000/posts",data)
     .pipe(map((res:any)=>{
      return res;
     }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
     .pipe(map((res:any)=>{
      return res;
     }))
  }

  updateEmploye(data :any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
     .pipe(map((res:any)=>{
      return res;
     }))
  }

  deleteEmploye(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
     return res;
    }))
  }

}
