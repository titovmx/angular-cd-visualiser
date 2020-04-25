import { Component, OnInit, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CdTreeItem } from '../../cd-visualiser/cd-tree-item/cd-tree-item.component';
import { CdViewerBuilderService } from '../../cd-visualiser/services/cd-viewer-builder.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent extends CdTreeItem {
  @Output() add = new EventEmitter<string>();

  inputValue = '';
  placeholder = 'Type an item';

  constructor(cdViewerBuilderService: CdViewerBuilderService) {
    super(cdViewerBuilderService, 'TodoInputComponent', 1);
  }

  onInputChange(event) {
    this.inputValue = event.target.value;
  }

  @HostListener('keyup.enter')
  addValue() {
    if (this.inputValue.trim() === '') {
      return;
    }
    
    this.add.emit(this.inputValue);
    this.inputValue = '';
  }
}
