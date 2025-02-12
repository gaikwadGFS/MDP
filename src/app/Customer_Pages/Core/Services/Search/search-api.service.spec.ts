import { TestBed } from '@angular/core/testing';

import { SearchAPIService } from './search-api.service';

describe('SearchAPIService', () => {
  let service: SearchAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
