import { Component } from '@angular/core';
import { VolunteersService,} from '../volunteers.service';
import { Volunteer } from '../volunteer.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrl: './volunteers-list.component.scss'
  
})
export class VolunteersListComponent {
  voluteersList:Volunteer[]=[];
  constructor (private volunteerService:VolunteersService){
    // this.ngOnInit();
        volunteerService.getVoluntreesFromServer().subscribe(
        volunteers=>{this.voluteersList=volunteers;},
        err=>{console.log(err);});
  }

  selectedVolunteer?:Volunteer;
  editVolunteer=(volunteer:Volunteer)=>{
    this.selectedVolunteer=volunteer;
  }
  
  // ngOnInit(){
  //   this.volunteerService.getVoluntreesFromServer().subscribe(
  //     volunteers=>this.voluteersList=volunteers,
  //     err=>{console.log(err);});
  // }
}
