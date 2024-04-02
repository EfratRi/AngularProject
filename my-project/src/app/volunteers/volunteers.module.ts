import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteersService } from './volunteers.service';
import { ReactiveFormsModule } from '@angular/forms';

const APP_ROUTERS :Route[]=[
  { path: "volunteers", component: VolunteersListComponent },
  { path: "volunteers/editVolunteer/:volunteer", component: EditVolunteerComponent }
]

@NgModule({
  declarations: [VolunteersListComponent,EditVolunteerComponent],
  imports: [CommonModule, RouterModule.forChild(APP_ROUTERS),HttpClientModule,ReactiveFormsModule],
  providers:[VolunteersService]
})
export class VolunteersModule { }
