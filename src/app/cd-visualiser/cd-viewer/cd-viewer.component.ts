import { Component } from '@angular/core';
import { CdViewerBuilderService } from '../services/cd-viewer-builder.service';
import { CdTreeNode } from '../services/cd-tree-node';

@Component({
  selector: 'cd-viewer',
  templateUrl: './cd-viewer.component.html',
  styleUrls: ['./cd-viewer.component.scss']
})
export class CdViewerComponent {
  title = 'Change Detection Viewer';

  constructor(private cdViewerBuilder: CdViewerBuilderService) {}

  get treeNodes() {
    return this.cdViewerBuilder.treeNodes;
  }
}
