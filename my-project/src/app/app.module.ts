import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule } from "@angular/router";
import { VolunteersListComponent } from "./volunteers/volunteers-list/volunteers-list.component";
import { VolunteersModule } from "./volunteers/volunteers.module";
import { HttpClientModule } from "@angular/common/http";
import { SchedulindVolunteersComponent } from "./scheduling/schedulind-volunteers/schedulind-volunteers.component";
const APP_ROUTERS :Route[]=[
    // {path:"",component:AppComponent},
    {path:"volunteers",loadChildren:()=>import("./volunteers/volunteers.module").then(m=>m.VolunteersModule)},
    {path:"scheduling",loadChildren:()=>import("./scheduling/scheduling.module").then(m=>m.SchedulingModule)}

    // {path:"volunteers",component:VolunteersListComponent},
    // {path:"scheduling",component:SchedulindVolunteersComponent}
]
@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,RouterModule.forRoot(APP_ROUTERS),VolunteersModule,HttpClientModule],
    bootstrap: [AppComponent]

})
export class AppModule{

}