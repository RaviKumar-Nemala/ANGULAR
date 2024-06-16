import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './users-add.component.html',
  styleUrl: './users-add.component.css'
})
export class UsersAddComponent implements OnInit {

  userAddForm !: FormGroup;

  ngOnInit() {
    this.userAddForm = new FormGroup({
      username: new FormControl('' , [Validators.required , Validators.minLength(4)]),
      password: new FormControl(''  , [ Validators.required, Validators.pattern(/[a-zA-Z0-9]{5}/)]),
      age: new FormControl('' , [Validators.required, Validators.min(10)]),
    })
  }

  addUser()
  {
    console.log( 'called');
    console.log( this.userAddForm.get('username') )
  }
}
