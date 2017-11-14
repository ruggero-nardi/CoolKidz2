import { TestBed, inject } from '@angular/core/testing';

import { RealmStatusService } from './realm-status.service';

describe('RealmStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealmStatusService]
    });
  });

  it('should be created', inject([RealmStatusService], (service: RealmStatusService) => {
    expect(service).toBeTruthy();
  }));
});
