import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PackageHandlingService } from './package-handling.service';

describe('PackageHandlingService', () => {
  let service: PackageHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [PackageHandlingService]
    });
    service = TestBed.inject(PackageHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
