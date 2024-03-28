import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(private _router:Router){

  // }
  title = 'my-project';
}
