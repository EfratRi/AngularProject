import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SchedulindVolunteersComponent } from './schedulind-volunteers/schedulind-volunteers.component';
import { ReactiveFormsModule } from '@angular/forms';

const APP_ROUTERS :Route[]=[
  //  { path: "", component: SchedulindVolunteersComponent },
  { path: "scheduling", component: SchedulindVolunteersComponent }]

@NgModule({
  declarations: [SchedulindVolunteersComponent],
  imports: [CommonModule, RouterModule.forChild(APP_ROUTERS),ReactiveFormsModule]
})
export class SchedulingModule { }
