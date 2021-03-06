import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ModalDirective } from './modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ItemDetailComponent,
    ModalDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
