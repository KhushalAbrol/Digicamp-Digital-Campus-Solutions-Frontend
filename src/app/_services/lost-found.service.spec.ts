import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { LostFoundService } from './lost-found.service';

describe('LostFoundService', () => {
  let service: LostFoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [LostFoundService]
    });
    service = TestBed.inject(LostFoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
