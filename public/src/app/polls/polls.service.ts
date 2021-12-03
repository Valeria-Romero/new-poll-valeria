import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor( private _http: HttpClient) {

  }

  createNewPoll( newPoll:any ){
    return this._http.post("http://localhost:8080/poll/newpoll", newPoll)
  }

  findPolls(){
    return this._http.get("http://localhost:8080/poll/allpolls")
  }

  findPollById( id:any ){
    return this._http.get(`http://localhost:8080/poll/pollById/${id}`)
  }

  deletePoll( _id:any){
    return this._http.delete(`http://localhost:8080/poll/removePoll/${_id}`)
  }

  updateCount( info:any){
    return this._http.put("http://localhost:8080/poll/updateCount", info)
  }

}



