import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginPassword: string = "";
  loginUsername: string = "";
  errorMessage: string = "";

  constructor(private _usersService: UsersService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  login(event:any): void{
    event.preventDefault();

    if(this.loginPassword == '' || this.loginUsername == ''){
      this.errorMessage = "You can't leave empty spaces"
    }
    let currentUser={
      username: this.loginUsername,
      password: this.loginPassword
    }
    let observable = this._usersService.loginUser( currentUser );
    observable.subscribe( (data:any) =>{
      if(data === null ){
        this.errorMessage = "Wrong credentials"
      }
      else{
        console.log(data)
        sessionStorage.setItem('sessionName', data.firstName)
        console.log(sessionStorage)
        this._router.navigate( ['/dashboard'] );
      }
    })
  }

}
