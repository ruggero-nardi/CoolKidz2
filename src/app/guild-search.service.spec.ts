import { TestBed, inject } from '@angular/core/testing';

import { GuildSearchService } from './guild-search.service';

describe('GuildSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuildSearchService]
    });
  });

  it('should be created', inject([GuildSearchService], (service: GuildSearchService) => {
    expect(service).toBeTruthy();
  }));
});
