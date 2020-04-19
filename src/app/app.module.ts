import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { CdVisualiserModule } from './cd-visualiser/cd-visualiser.module';
import { CdViewerBuilderService } from './cd-visualiser/services/cd-viewer-builder.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DemoModule,
    CdVisualiserModule,
  ],
  providers: [
    CdViewerBuilderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
