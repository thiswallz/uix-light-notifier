import { TestBed, inject } from '@angular/core/testing';

import { UixLightNotifierService } from './uix-light-notifier.service';

describe('UixLightNotifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UixLightNotifierService]
    });
  });

  it('should be created', inject([UixLightNotifierService], (service: UixLightNotifierService) => {
    expect(service).toBeTruthy();
  }));
});
