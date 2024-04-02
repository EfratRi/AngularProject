import { Component } from '@angular/core';
import { VolunteersService,} from '../volunteers.service';
import { Volunteer } from '../volunteer.model';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrl: './volunteers-list.component.scss'
  
})
export class VolunteersListComponent {
  voluteersList:Volunteer[]=[];
  constructor (private volunteerService:VolunteersService,private router:Router){
    // this.ngOnInit();
        volunteerService.getVoluntreesFromServer().subscribe(
        volunteers=>{volunteers[0].days[3]=true,this.voluteersList=volunteers;console.log(this.voluteersList);
        },
        err=>{console.log(err);});
  }

  selectedVolunteer?:Volunteer;
  editVolunteer=(volunteer:Volunteer)=>{
    this.selectedVolunteer=volunteer;
     this.router.navigate(['/editVolunteer',{volunteer:JSON.stringify(volunteer)}])
  }  
  // ngOnInit(){
  //   this.volunteerService.getVoluntreesFromServer().subscribe(
  //     volunteers=>this.voluteersList=volunteers,
  //     err=>{console.log(err);});
  // }
}
