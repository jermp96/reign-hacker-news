import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {NavbarComponent, NewsCardComponent} from '../app/components';
import { NewsComponent } from '../app/pages';

const SHARED = [
  NavbarComponent,
  NewsCardComponent
];

const PAGES = [
  NewsComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...SHARED,
    ...PAGES
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
