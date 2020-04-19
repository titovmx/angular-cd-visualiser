import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CdViewerComponent } from './cd-viewer/cd-viewer.component';
import { CdViewerTreeNodeComponent } from './cd-viewer-tree-node/cd-viewer-tree-node.component';

@NgModule({
  declarations: [
    CdViewerComponent,
    CdViewerTreeNodeComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [CdViewerComponent],
  providers: [],
})
export class CdVisualiserModule { }
