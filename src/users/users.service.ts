import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { IUser } from "./users.interface";
import { BehaviorSubject, catchError, map, shareReplay } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UsersService implements OnInit {

    private GET_ALL_USERS_URL = 'http://localhost:3000/users'

    private UPLOAD_USER_URL = 'http://localhost:3000/users'

    private DELETE_USER_URL = 'http://localhost:3000/users'

    constructor(private http: HttpClient) {
        console.log(this.http != null);
    }

    usersSubject = new BehaviorSubject<IUser[]>([])

    users$ = this.usersSubject.asObservable()
    
    errorsSubject = new BehaviorSubject<string>('');
    
    errors$ = this.errorsSubject.asObservable();

    getUsers$ = this.http.get<IUser[]>( this.GET_ALL_USERS_URL).pipe(
        // shareReplay(1),
        map((response:any)=> { return response.data}),
        catchError((err:any)=>  { throw err})
    ).subscribe( {
        next:(users:IUser[])=> this.usersSubject.next( users), 
        error:(err:any)=> {console.log( err.message); this.errorsSubject.next('unable to fetch the user details')}
    }) ;

    ngOnInit(): void {
        console.log('onint called in user service')
    }

    getUsers() {
        // return this.http.get(this.GET_ALL_USERS_URL);
     return this.users$;
    }

    getErrors()
    {
         return this.errors$;
    }
    deleteUser(userId:string){
        this.http.delete( `${this.GET_ALL_USERS_URL}/${userId}`).subscribe(
            (data)=>
            {
                 
                let users = this.usersSubject.getValue(); 
                console.log( users);
                const index = users.findIndex( (user:IUser)=> user._id === user._id);
                users.splice(index,1);
                this.usersSubject.next( users);
            }
        )
    }   
    
}