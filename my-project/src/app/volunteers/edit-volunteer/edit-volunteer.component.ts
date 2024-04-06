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
   public get volunteer():Volunteer|undefined{
          return this._volunteer;
   }

   flag:boolean=true;
   flag1:boolean=false;
   volunteerForm:FormGroup=new FormGroup({});
   saveVolunteerDetails=():void=>{
    if(this.volunteer!=undefined){
      this.volunteer.days[0]=this.volunteerForm.controls['Sunday'].value;
      this.volunteer.days[1]=this.volunteerForm.controls['Monday'].value;
      this.volunteer.days[2]=this.volunteerForm.controls['Tuesday'].value;
      this.volunteer.days[3]=this.volunteerForm.controls['Wednesday'].value;
      this.volunteer.days[4]=this.volunteerForm.controls['Thursday'].value;
      console.log(this.volunteer);
      this._scheduling.getScheduling().subscribe(
        data=>{this.days=data;
          if(this.volunteer!=undefined){
            for(let i=0;i<5;i++){
              if(this.days[i]==this.volunteer.id&&this.volunteer.days[i]==false){
                alert("can't save")
                this.flag=false;
                this._router.navigate(['/volunteers'])
              }
            }
          }
          this.flag1=true;
      }) 
      if(this.flag==true&&this.flag1==true){
        this._volunteerService.updateVolunteer(this.volunteer).subscribe(
        data=>{
          console.log("in edit");   
          console.log(data);
          this._router.navigate(['/volunteers'])
        }
      );
      }   
    } 
   }
}
