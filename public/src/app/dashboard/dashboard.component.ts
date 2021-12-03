import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PollsService } from '../polls/polls.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  allPolls:any[] = [];
  sessionName:any;

  constructor(private _pollService: PollsService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(  ): void {
    this.findPolls();
    this.checkSession();    
  }

  checkSession():void{
    const firstName = sessionStorage.getItem('sessionName');

    if(firstName === null){
      this._router.navigate( ['/'] );
    }
  }

  findPolls():void{
    this._pollService.findPolls()
      .subscribe((data:any) =>{
        this.allPolls = data;
        console.log(data)
        this.sessionName = sessionStorage.getItem('sessionName');
        console.log(this.sessionName);
        
      })
  }

  logout():void{
    sessionStorage.clear();
    this._router.navigate(['/']);
  }

  deletePoll(_id:any):void{
  this._pollService.deletePoll(_id)
    .subscribe((data:any)=>{
      console.log(_id);
      this._router.navigate(['/dashboard'])
    })
  }


}
