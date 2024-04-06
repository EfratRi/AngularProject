import { Component, OnInit } from '@angular/core';
import { SchedulingService } from '../scheduling.service';
import { Volunteer } from '../../volunteers/volunteer.model';
import { VolunteersService } from '../../volunteers/volunteers.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedulind-volunteers',
  templateUrl: './schedulind-volunteers.component.html',
  styleUrl: './schedulind-volunteers.component.scss'
})
export class SchedulindVolunteersComponent implements OnInit{
    days:string[]=[];
    constructor(private _schedulingService:SchedulingService,private _volunteerService:VolunteersService,private _router:Router){
      _schedulingService.getScheduling().subscribe(
        data=>{
         this.days=data;console.log(this.days);
        })
      _volunteerService.getVoluntreesFromServer().subscribe(data=>{
        console.log(data); this.volunteers=data;this.flag=true})
    }
    ngOnInit(): void {
    }
    daysOfWeek:string[]=["Sunday","Monday","Tuesday","Wensday","Thursday"];
    flag:boolean=false;
    volunteers:Volunteer[]=[]
    schedulingForm:FormGroup=new FormGroup({
      "0":new FormControl(),
      "1":new FormControl(),
      "2":new FormControl(),
      "3":new FormControl(),
      "4":new FormControl()
    });
    getVolunteersPerDay=(day:number):Volunteer[]=>{
      // console.log("in func day= ",day);
      return this.volunteers.filter(v=>v.days[day]==true);
    }
    saveScheduling=()=>{
      for(let i=0;i<5;i++){
        if(this.schedulingForm.controls[i]!=null)
            this.days[i]=this.schedulingForm.controls[i].value;
      }
      console.log(this.days);
      this._schedulingService.saveScheduling(this.days).subscribe(data=>console.log("from save: ",data))
      alert("this page is saved");
    }  
}
