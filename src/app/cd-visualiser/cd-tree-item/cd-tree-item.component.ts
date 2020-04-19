import { OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { CdViewerBuilderService } from '../services/cd-viewer-builder.service';

export class CdTreeItem implements OnInit, OnChanges {
  constructor(private cdViewerBuilderService: CdViewerBuilderService, private name: string, level: number) {
    cdViewerBuilderService.init(this, name, level);
  }

  ngOnInit() {
    console.log(`${this.name} On Init`);
    this.cdViewerBuilderService.fireInit(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`${this.name} On Changes`);
    this.cdViewerBuilderService.fireChanges(this);
  }
}