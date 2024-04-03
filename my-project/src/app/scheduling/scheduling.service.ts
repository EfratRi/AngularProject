import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private _http:HttpClient) { }

  // getVoluteersByDay=(day:Number)=>{

  // }
  getScheduling=():Observable<string []>=>{
    return this._http.get<string []>("/api/Scheduling");
  }
  saveScheduling=()=>{

  }
}
