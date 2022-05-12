import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CouriersComponent } from './couriers.component';
import {MatDialogModule} from '@angular/material/dialog';


describe('CouriersComponent', () => {
  let component: CouriersComponent;
  let fixture: ComponentFixture<CouriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouriersComponent ],
      imports: [HttpClientTestingModule, MatDialogModule], 
      providers: [CouriersComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
