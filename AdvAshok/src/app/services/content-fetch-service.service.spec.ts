import { TestBed } from '@angular/core/testing';

import { ContentFetchServiceService } from './content-fetch-service.service';

describe('ContentFetchServiceService', () => {
  let service: ContentFetchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFetchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
