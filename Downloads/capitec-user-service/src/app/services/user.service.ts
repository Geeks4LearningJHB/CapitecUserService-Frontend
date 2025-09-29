import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  addUser(user:any){
    return this.http.post(`${this.rootUrl}/users/signup`,user, {headers: this.headers})
  }

  getUsers(){
    return this.http.get(`${this.rootUrl}/users/all`, {headers: this.headers})
  }
}
