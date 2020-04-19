import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdTreeItem } from '../../cd-visualiser/cd-tree-item/cd-tree-item.component';
import { CdViewerBuilderService } from '../../cd-visualiser/services/cd-viewer-builder.service';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContainerComponent extends CdTreeItem {
  title = 'Another One ToDo List';
  items: string[] = ['awesome task'];

  constructor(cdViewerBuilderService: CdViewerBuilderService) {
    super(cdViewerBuilderService, 'TodoContainerComponent', 0);
  }

  onItemAdd(newItem) {
    this.items = [...this.items, newItem];
  }
}
