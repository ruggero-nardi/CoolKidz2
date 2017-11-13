import { TestBed, inject } from '@angular/core/testing';

import { GuildInterfaceService } from './guild-interface.service';

describe('GuildInterfaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuildInterfaceService]
    });
  });

  it('should be created', inject([GuildInterfaceService], (service: GuildInterfaceService) => {
    expect(service).toBeTruthy();
  }));
});
