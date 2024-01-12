import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }
  private Url = 'http://127.0.0.1:3000/author/' 

  register(author:FormData){
    return this.http.post(this.Url + 'register' , author)
  }

  login(author:any){
    return this.http.post(this.Url + 'login' , author)
  }
}
