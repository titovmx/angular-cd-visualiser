import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdViewerComponent } from './cd-viewer.component';

describe('CdViewerComponent', () => {
  let component: CdViewerComponent;
  let fixture: ComponentFixture<CdViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
