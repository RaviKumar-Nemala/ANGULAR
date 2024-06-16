import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { IUser } from '../users.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent  implements OnInit{


  @Input()
  usersList :IUser[] | null = [] ;

  @Output()
  deleteUserEvent = new EventEmitter<IUser>();
  
  ngOnInit(): void {
      console.log( 'users list component on init called');
  }

  deleteUser(user:IUser)
  {
    console.log('button clicked');
    this.deleteUserEvent.emit( user );  
  }
  
}

