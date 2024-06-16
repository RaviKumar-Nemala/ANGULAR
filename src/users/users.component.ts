import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { IUser } from './users.interface';
import { UsersListComponent } from './users-list/users-listcomponent';
import { Observable, Subject, catchError, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsersAddComponent } from './users-add/users-add.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,UsersListComponent , UsersAddComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  usersList$ !: Observable<IUser[]> ;

  errors$  !:Observable<string>;

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private userService: UsersService , private activedRouter:ActivatedRoute) {
    console.log( activedRouter.snapshot.queryParams);
  }

  async getUsers()
  {
     this.usersList$ = this.userService.getUsers()

     this.errors$ =  this.userService.getErrors().pipe(
      tap ( (data) => console.log( data) )
     )


  }

    deleteUser(user:IUser){
      console.log( 'delete user called')
      this.userService.deleteUser(user._id);
  } 
  
   
    // .subscribe( {
    //   next: (usersList:IUser[])=>
    //   {
    //     this.usersList = usersList;
    //   }
    // })
    
  }
