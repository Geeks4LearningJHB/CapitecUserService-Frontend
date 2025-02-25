import { Component, OnInit } from '@angular/core';

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
  user: any = {
    name: '',
    surname: '',
    id_number: ''
  }

  constructor() {}

  ngOnInit(): void {
      
  }

  addUser() {
    alert(this.user.name +  ' added successfully');
    console.log(this.user);
  }

}
