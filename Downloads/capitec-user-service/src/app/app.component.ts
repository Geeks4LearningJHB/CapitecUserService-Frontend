import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capitec-user-service';
  constructor(private router:Router){

  }

  addUser(){
    this.router.navigate(["/add-user"])
  }

  viewUsers(){
    this.router.navigate(["/user-list"])
  }
}
