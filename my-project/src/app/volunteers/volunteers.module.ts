import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteersService } from './volunteers.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SchedulingModule } from '../scheduling/scheduling.module';

const APP_ROUTERS :Route[]=[
  { path: "volunteers", component: VolunteersListComponent },
  { path: "editVolunteer", component: EditVolunteerComponent }
  // { path: "editVolunteer/:id", component: EditVolunteerComponent }
]

@NgModule({
  declarations: [VolunteersListComponent,EditVolunteerComponent],
  imports: [CommonModule, RouterModule.forChild(APP_ROUTERS),HttpClientModule,ReactiveFormsModule,SchedulingModule],
  providers:[VolunteersService]
})
export class VolunteersModule { }
