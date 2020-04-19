import { TestBed } from '@angular/core/testing';

import { CdViewerBuilderService } from './cd-viewer-builder.service';

describe('CdViewerBuilderService', () => {
  let service: CdViewerBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdViewerBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
