import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CdViewerBuilderService } from '../../cd-visualiser/services/cd-viewer-builder.service';
import { CdTreeItem } from '../../cd-visualiser/cd-tree-item/cd-tree-item.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent extends CdTreeItem {
  @Input() items: string[];

  constructor(cdViewerBuilderService: CdViewerBuilderService) {
    super(cdViewerBuilderService, 'TodoListComponent', 1);
  }
}
