import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {
  NavbarComponent,
  NewsCardComponent,
  SelectButtonComponent,
  DropdownComponent
} from './shared/components';

import {
  DiffTimePipe
} from './shared/pipes';

import {NewsComponent} from './pages';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

const SHARED = [
  NavbarComponent,
  NewsCardComponent,
  SelectButtonComponent,
  DropdownComponent
];

const PAGES = [
  NewsComponent
];

const PIPES = [
  DiffTimePipe
];

@NgModule({
  declarations: [
    AppComponent,
    ...SHARED,
    ...PAGES,
    ...PIPES
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
