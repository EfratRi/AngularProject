import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulindVolunteersComponent } from './schedulind-volunteers.component';

describe('SchedulindVolunteersComponent', () => {
  let component: SchedulindVolunteersComponent;
  let fixture: ComponentFixture<SchedulindVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulindVolunteersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulindVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
