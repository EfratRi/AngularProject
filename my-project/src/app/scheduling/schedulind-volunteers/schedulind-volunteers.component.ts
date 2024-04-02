import { Component } from '@angular/core';
import { SchedulingService } from '../scheduling.service';


@Component({
  selector: 'app-schedulind-volunteers',
  templateUrl: './schedulind-volunteers.component.html',
  styleUrl: './schedulind-volunteers.component.scss'
})
export class SchedulindVolunteersComponent {
    days:Number[]=[];
    constructor(private _schedulingService:SchedulingService){
      _schedulingService.getScheduling().subscribe(
        data=>{
         this.days=data;console.log(this.days);
        },
        err=>console.log(err)
      )
    }
    // getSchedulingFromServer=()=>{
    //   this._schedulingService.getScheduling().subscribe(
    //     data=>{console.log(data);
    //      this.days=data;console.log(this.days);
    //     },
    //     err=>console.log(err)
    //   )
    // }
}
