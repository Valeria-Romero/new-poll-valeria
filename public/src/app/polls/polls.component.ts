import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PollsService } from './polls.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  pollInfo:any[] = [];
  paramId:any;
  constructor(  private _route: ActivatedRoute,
                private _router: Router,
                private _pollService: PollsService) { }

  ngOnInit(): void {
    this.loadPollInfo();
    this.checkSession();
  }
  
  checkSession():void{
    const firstName = sessionStorage.getItem('sessionName');

    if(firstName === null){
      this._router.navigate( ['/'] );
    }
  }

  loadPollInfo():void{
    this._route.params.subscribe( (params:any) =>{
      this.paramId = params._id;
    })
    this._pollService.findPollById(this.paramId)
    .subscribe((data:any)=>
    {
      this.pollInfo.push(data);       
      console.log(this.pollInfo);
    })
  }

  incrementVoteCount(option:Number):void{
    console.log(this.pollInfo[0]._id);
    let info = {
                _id: this.pollInfo[0]._id,
                option: option
              }
    this._pollService.updateCount(info)
      .subscribe((data:any)=>{
        // console.log(info);
      })
      location.reload();
  }

}
