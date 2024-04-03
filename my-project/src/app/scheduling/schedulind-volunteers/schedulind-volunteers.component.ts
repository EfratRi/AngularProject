import { Component } from '@angular/core';
import { SchedulingService } from '../scheduling.service';
import { Volunteer } from '../../volunteers/volunteer.model';
import { VolunteersService } from '../../volunteers/volunteers.service';


@Component({
  selector: 'app-schedulind-volunteers',
  templateUrl: './schedulind-volunteers.component.html',
  styleUrl: './schedulind-volunteers.component.scss'
})
export class SchedulindVolunteersComponent {
    days:string[]=[];
    constructor(private _schedulingService:SchedulingService,private _volunteerService:VolunteersService){
      _schedulingService.getScheduling().subscribe(
        data=>{
         this.days=data;console.log(this.days);
        },
        err=>console.log(err)
      )
      _volunteerService.getVoluntreesFromServer().subscribe(data=>{
        this.volunteers=data;
      })
      this.volunteer1=this.getVolunteersPerDay(1);
    }
    private volunteers:Volunteer[]=[]
    volunteer1:Volunteer[]=[];
    private volunteerPerDay:Volunteer[]=[];
    getVolunteersPerDay=(day:number):Volunteer[]=>{
      this.volunteers.forEach(x=>{
        if(x.days[day]==true){
          this.volunteerPerDay.push(x)
        }})
        return this.volunteerPerDay;
    }
    
}
