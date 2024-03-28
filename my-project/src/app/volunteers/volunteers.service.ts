import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  constructor(private _http:HttpClient) { }
  
//   getVoluntreesFromServer=():Observable<Volunteer[]>=>{
//     return this._http.get<Volunteer[]>("/api/volunteers");
// }

getVoluntreesFromServer=():Observable<Volunteer []>=>{
  return this._http.get<Volunteer []>("/api/Volunteers");
}

}
