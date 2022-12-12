import { TestBed } from '@angular/core/testing';

import { InputDialogeServiceService } from './input-dialoge-service.service';

describe('InputDialogeServiceService', () => {
  let service: InputDialogeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDialogeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
