import { TestBed, inject } from '@angular/core/testing';

import { AvatarUploadService } from './avatar-upload.service';

describe('AvatarUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvatarUploadService]
    });
  });

  it('should ...', inject([AvatarUploadService], (service: AvatarUploadService) => {
    expect(service).toBeTruthy();
  }));
});
