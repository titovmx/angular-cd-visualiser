import { Injectable } from '@angular/core';
import { CdTreeItem } from '../cd-tree-item/cd-tree-item.component';
import { CdTreeNode } from './cd-tree-node';

@Injectable({
  providedIn: 'root'
})
export class CdViewerBuilderService {
  private tree = new Map<CdTreeItem, CdTreeNode>();

  constructor() {}

  init(component: CdTreeItem, componentType: string, level: number) {
    this.tree.set(component, new CdTreeNode(componentType, level));
}

  get treeNodes(): CdTreeNode[] {
    const items = Array.from(this.tree.values())
      .sort((a, b) => a.level - b.level);

    return items;
  }

  fireInit(component: CdTreeItem) {
    this.tree.get(component).fireInit();
  }

  fireChanges(component: CdTreeItem) {
    this.tree.get(component).fireChanges();
  }
}
