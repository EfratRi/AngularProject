import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../volunteer.model';
import { ActivatedRoute, Router} from '@angular/router';
import { VolunteersService } from '../volunteers.service';
import { SchedulingService } from '../../scheduling/scheduling.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrl: './edit-volunteer.component.scss'
})
export class EditVolunteerComponent {
  //  constructor(private _acr:ActivatedRoute){
  //     this._acr.paramMap.get()
  //  }
  constructor(private _volunteerService:VolunteersService,private _acr:ActivatedRoute,private _router:Router,private _scheduling:SchedulingService){
    // this._id=JSON.parse(this._acr.snapshot.paramMap.get('id') ?? '');
    // this._volunteerService.getVolunteerById(this._id).subscribe(
    //   data=>{
    //     console.log("in edit");
    //     console.log(data);       
    //     this._volunteer=data;
    //     this.volunteerForm=new FormGroup({
    //       "name":new FormControl(this.volunteer?.name),
    //       "id":new FormControl(this.volunteer?.id),
    //       "Sunday":new FormControl(this.volunteer?.days[0]),
    //       "Monday":new FormControl(this.volunteer?.days[1]),
    //       "Tuesday":new FormControl(this.volunteer?.days[2]),
    //       "Wednesday":new FormControl(this.volunteer?.days[3]),
    //       "Thursday":new FormControl(this.volunteer?.days[4])
    //   })
    //   },
    //   err=>console.log(err)
      
    // )
    this._volunteer=JSON.parse(this._acr.snapshot.paramMap.get('volunteer') ?? '')
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
   private _volunteer?:Volunteer;
   private _id:string="";
   private days:string[]=[];
  //  Sunday?:boolean=this.volunteer?.days[0]||false;
  //  Monday?:boolean=this.volunteer?.days[1]||false;
  //  Tuesday?:boolean=this.volunteer?.days[2]||false;
  //  Wednesday?:boolean=this.volunteer?.days[3]||false;
  //  Thursday?:boolean=this.volunteer?.days[4]||false;
   public get volunteer():Volunteer|undefined{
          return this._volunteer;
   }
  //  @Input()
          

  //  @Output()
  //  onSaveVolunteer:EventEmitter<Volunteer>=new EventEmitter<Volunteer>();
   volunteerForm:FormGroup=new FormGroup({});
   saveVolunteerDetails=():void=>{
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
      this._scheduling.getScheduling().subscribe(
        data=>{this.days=data;
          if(this.volunteer!=undefined){
            if(this.days[0]==this.volunteer.id&&this.volunteer.days[0]==false){
              alert("can't save")
              return
            }
            if(this.days[1]==this.volunteer.id&&this.volunteer.days[1]==false){
              alert("can't save")
              return
            }
            if(this.days[2]==this.volunteer.id&&this.volunteer.days[2]==false){
              alert("can't save")
              return
            }
            if(this.days[3]==this.volunteer.id&&this.volunteer.days[3]==false){
              alert("can't save")
              return
            }
            if(this.days[4]==this.volunteer.id&&this.volunteer.days[4]==false){
              alert("can't save")
              return
            }
          }
          
      }
      )
      this._volunteerService.updateVolunteer(this.volunteer).subscribe(
        data=>{
          console.log("in edit");   
          console.log(data);
          this._router.navigate(['/volunteers'])
        }
      );    
    }
    else{
      console.log("undefined");
    }  
   }
}
