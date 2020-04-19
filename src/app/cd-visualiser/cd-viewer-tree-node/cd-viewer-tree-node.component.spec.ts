import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdViewerTreeNodeComponent } from './cd-viewer-tree-node.component';

describe('CdViewerTreeNodeComponent', () => {
  let component: CdViewerTreeNodeComponent;
  let fixture: ComponentFixture<CdViewerTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdViewerTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdViewerTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
