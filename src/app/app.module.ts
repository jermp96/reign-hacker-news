import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {
  NavbarComponent,
  NewsCardComponent,
  SelectButtonComponent,
  DropdownComponent
} from './components';

import {NewsComponent} from './pages';
import {FormsModule} from "@angular/forms";

const SHARED = [
  NavbarComponent,
  NewsCardComponent,
  SelectButtonComponent,
  DropdownComponent
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
