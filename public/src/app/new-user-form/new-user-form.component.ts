import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  
  newUser: any;
  usernameError:any;
  emptyError:any;
  sizeError:any;
  passError:any;
  userCreated:any;

  constructor(private _usersService: UsersService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newUser ={
      firstName: "",
      password: "",
      username: "",
      confirmPassword: ""
    }
  }

  createNewUser( event:any):void{
    event.preventDefault();
    this._usersService.createUser( this.newUser )
      .subscribe((error:any)=>{
        console.log(error.message);
        if( error.EmptySpace){
          this.emptyError = "Empty spaces not allowed"
        }
        if( error.usernameTaken){
          this.usernameError = "Username already in use"
        }
        if( error.Size ){
          this.sizeError = "First name and last name can't be less than 2 characters"
        }
        if( error.PassMatch ){
          this.passError = "Passwords don't match"
        }
        if ( error.message ){
          this.userCreated = error.message;
        }
      }
      );
  }

}
