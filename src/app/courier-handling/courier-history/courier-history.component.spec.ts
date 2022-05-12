import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material/dialog';
import { CourierHistoryComponent } from './courier-history.component';

describe('CourierHistoryComponent', () => {
  let component: CourierHistoryComponent;
  let fixture: ComponentFixture<CourierHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierHistoryComponent ],
      imports: [HttpClientTestingModule, MatDialogModule], 
      providers: [CourierHistoryComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
