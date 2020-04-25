import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostListener,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { CdViewerBuilderService } from '../../cd-visualiser/services/cd-viewer-builder.service';
import { CdTreeItem } from '../../cd-visualiser/cd-tree-item/cd-tree-item.component';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent extends CdTreeItem implements AfterViewChecked {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  @ViewChild('inputElement') inputElement: ElementRef;

  isEditMode = false;

  constructor(
    cdViewerBuilderService: CdViewerBuilderService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    super(cdViewerBuilderService, 'TodoListItemComponent', 2);
  }

  ngAfterViewChecked() {
    if (this.isEditMode) {
      this.inputElement.nativeElement.focus();
    }
  }

  onLabelClick(event) {
    this.isEditMode = true;
    this.inputElement.nativeElement.focus();
    this.changeDetectorRef.markForCheck();
  }

  onValueChange(event) {
    console.log('input change');
    this.value = event.target.value;
  }

  onInputBlur(event) {
    console.log('input blur');
    this.valueChange.emit(this.value);
    this.isEditMode = false;
  }
}
