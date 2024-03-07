import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  unames: string[] = ['Ann', 'Bob', 'Claire', 'David', 'Eve'];
  // unames: string[] = [];
  
  favoriteColor:string = 'blue'

}
