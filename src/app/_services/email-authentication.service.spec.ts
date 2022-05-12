import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { EmailAuthenticationService } from './email-authentication.service';

describe('EmailAuthenticationService', () => {
  let service: EmailAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [EmailAuthenticationService]
    });
    service = TestBed.inject(EmailAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
