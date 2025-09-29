import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  email: string = '';
  password: string = '';
  loginError: string = '';
  LoggingIn: boolean = false;
  successMessage: string = '';
  loading: boolean = false;
  user: any = {
    name: '',
    surname: '',
    idNumber: '',
    password: 'thapelo@1234'
  }

  constructor(private user_svc: UserService, private router: Router) {}

  ngOnInit(): void {
      
  }

  addUser() {
    this.loading = true;
    this.user_svc.addUser(this.user).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.LoggingIn = true;
      setTimeout(() => {
        this.LoggingIn = false;
      }, 5000);
      this.routeToUserList();
    }, (error) => {
      console.log(error);
      this.loginError = 'User not added';
      this.loading = false;
    
    });
  }

  routeToUserList() {
    this.router.navigate(['/user-list']);
  }

}
