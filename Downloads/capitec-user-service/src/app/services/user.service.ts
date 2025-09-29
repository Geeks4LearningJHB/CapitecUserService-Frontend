import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigServiceService } from './config-service.service';  


@Injectable({
  providedIn: 'root'
})
export class UserService {

   headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  rootUrl : string;
  constructor(private http: HttpClient, private config_svc: ConfigServiceService) {
    this.rootUrl = this.config_svc.rootUrl || environment.rootUrl;
   }

  addUser(user:any){
    return this.http.post(`${this.rootUrl}/users/signup`,user, {headers: this.headers})
  }

  getUsers(){
    return this.http.get(`${this.rootUrl}/users/all`, {headers: this.headers})
  }
}
