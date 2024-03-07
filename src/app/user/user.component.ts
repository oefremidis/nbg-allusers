import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // username;  // error
  // username: any;   // declate type -- any
  // username = 'Nik';  // give initial value
  // username: string; // error - must give a value (init, constructor) 
  // username: string = "Anna"; 
  username: string;

  constructor(){
    this.username = 'George';
    let localName = 'Maria'; // local variable -- let, const, var
  }

  // give initial value to an object
  user1 = {
    username: 'Bill',
    password: '1234a',
    loginDuration: '5h'
  }

  show:boolean = false;

  // give initial value to array
  allUser = ['Ann', 'Bob', 'Claire', 'David', 'Eve'];
 
}
