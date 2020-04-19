import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CdViewerBuilderService } from '../../cd-visualiser/services/cd-viewer-builder.service';
import { CdTreeItem } from '../../cd-visualiser/cd-tree-item/cd-tree-item.component';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent extends CdTreeItem {
  @Input() value: string;

  constructor(cdViewerBuilderService: CdViewerBuilderService) {
    super(cdViewerBuilderService, 'TodoListItemComponent', 2);
  }
}
