import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PollsService } from '../polls/polls.service';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {
  
  poll:any;
  errorMessage: String = "";

  constructor(private _pollService: PollsService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.poll = {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      pollCreator: sessionStorage.getItem('sessionName')
    }   
    this.checkSession();

  }
  checkSession():void{
    const firstName = sessionStorage.getItem('sessionName');

    if(firstName === null){
      this._router.navigate( ['/'] );
    }
  }

  NewPoll(event:any):void{
    event.preventDefault();
    
    if( this.poll.question === "" || 
        this.poll.option1 === "" || 
        this.poll.option2 === "" ||
        this.poll.option3 === "" ||
        this.poll.option4 === "" ||
        this.poll.pollCreator === ""){
          this.errorMessage = "Empty spaces not allowed"
        }
      else if(this.poll.question.length < 8 || 
              this.poll.option1.length < 4 || 
              this.poll.option2.length < 4 ||
              this.poll.option3.length < 4 ||
              this.poll.option4.length < 4){
                this.errorMessage = "Poll question can not be less than 8 characters and options can not be less than 4 characters"
              }
    
    else{
      this._pollService.createNewPoll(this.poll)
        .subscribe((data:any)=>{
          console.log(data);
        })
        this._router.navigate( ['/dashboard'] );
    }

  }

}
