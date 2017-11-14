import { TestBed, inject } from '@angular/core/testing';

import { PlayerSearchService } from './player-search.service';

describe('PlayerSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerSearchService]
    });
  });

  it('should be created', inject([PlayerSearchService], (service: PlayerSearchService) => {
    expect(service).toBeTruthy();
  }));
});
