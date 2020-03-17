import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roles:any=['Admin','Guest','User'];
  userForm = this.formBuilder.group({
    name:[''],
    email:[''],
    password:[''],
    role:['']
  });
  constructor(private formBuilder:FormBuilder,private userService:UsersService) {
    
   }
   

  ngOnInit() {
  }

  subir(){
    console.log(this.userForm.value);
    this.userService.addUser(this.userForm.value);
  }

}
