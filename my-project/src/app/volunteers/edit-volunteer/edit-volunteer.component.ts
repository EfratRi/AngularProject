import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../volunteer.model';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrl: './edit-volunteer.component.scss'
})
export class EditVolunteerComponent {
   
   private _volunteer?:Volunteer;
   public get volunteer():Volunteer|undefined{
          return this._volunteer;
   }
   @Input()
   public set volunteer(value:Volunteer|undefined){
        this._volunteer=value;
        if(value){
          this.volunteerForm=new FormGroup({
              "name":new FormControl(this.volunteer?.name),
              "id":new FormControl(this.volunteer?.id)
          })
        }
   }
   @Output()
   onSaveVolunteer:EventEmitter<Volunteer>=new EventEmitter<Volunteer>();
   volunteerForm:FormGroup=new FormGroup({});


}
