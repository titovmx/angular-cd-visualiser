import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CdTreeNode } from '../services/cd-tree-node';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'cd-viewer-tree-node',
  templateUrl: './cd-viewer-tree-node.component.html',
  styleUrls: ['./cd-viewer-tree-node.component.scss']
})
export class CdViewerTreeNodeComponent implements OnInit {
  @Input() treeNode: CdTreeNode;

  @HostBinding('class.node-changed') isChanged = false;
  @HostBinding('class.node-initialised') isInitialised = false;

  constructor() { }

  ngOnInit() {
    this.treeNode.onChanges.pipe(
      tap(() => this.isChanged = true),
      delay(1000),
      tap(() => this.isChanged = false),
    ).subscribe();

    this.treeNode.onInit.pipe(
      tap(() => this.isInitialised = true),
      delay(1000),
      tap(() => this.isInitialised = false),
    ).subscribe();
  }

  get offsetLeft() {
    return this.treeNode.level * 16;
  }
}
