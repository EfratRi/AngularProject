import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../volunteer.model';
import { ActivatedRoute} from '@angular/router';
import { VolunteersService } from '../volunteers.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrl: './edit-volunteer.component.scss'
})
export class EditVolunteerComponent {
  //  constructor(private _acr:ActivatedRoute){
  //     this._acr.paramMap.get()
  //  }
  constructor(private _volunteerService:VolunteersService,private _acr:ActivatedRoute){
    this._volunteer=JSON.parse(this._acr.snapshot.paramMap.get('volunteer') ?? '');
  }
   private _volunteer?:Volunteer;
  //  Sunday?:boolean=this.volunteer?.days[0]||false;
  //  Monday?:boolean=this.volunteer?.days[1]||false;
  //  Tuesday?:boolean=this.volunteer?.days[2]||false;
  //  Wednesday?:boolean=this.volunteer?.days[3]||false;
  //  Thursday?:boolean=this.volunteer?.days[4]||false;
   public get volunteer():Volunteer|undefined{
          return this._volunteer;
   }
   @Input()
   public set volunteer(value:Volunteer|undefined){
        this._volunteer=value;
        if(value){
          this.volunteerForm=new FormGroup({
              "name":new FormControl(this.volunteer?.name),
              "id":new FormControl(this.volunteer?.id),
              "Sunday":new FormControl(this.volunteer?.days[0]),
              "Monday":new FormControl(this.volunteer?.days[1]),
              "Tuesday":new FormControl(this.volunteer?.days[2]),
              "Wednesday":new FormControl(this.volunteer?.days[3]),
              "Thursday":new FormControl(this.volunteer?.days[4])
          })
        }
   }
   @Output()
  //  onSaveVolunteer:EventEmitter<Volunteer>=new EventEmitter<Volunteer>();
   volunteerForm:FormGroup=new FormGroup({});
   saveVolunteerDetails=()=>{
    // this.volunteer=this.volunteerForm.value;
    if(this.volunteer!=undefined){
      console.log("not undefined");
      this.volunteer.days[0]=this.volunteerForm.controls['Sunday'].value;
      this.volunteer.days[1]=this.volunteerForm.controls['Monday'].value;
      this.volunteer.days[2]=this.volunteerForm.controls['Tuesday'].value;
      this.volunteer.days[3]=this.volunteerForm.controls['Wednesday'].value;
      this.volunteer.days[4]=this.volunteerForm.controls['Thursday'].value;
      console.log(this.volunteer);
      // this.onSaveVolunteer.emit(this.volunteer);
      this._volunteerService.updateVolunteer(this.volunteer.id,this.volunteer);
    }
    else{
      console.log("undefined");
    }  
   }
}
