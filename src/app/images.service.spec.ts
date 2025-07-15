import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
