import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { LookBookComponent } from './components/look-book/look-book.component';
import { AuthorsComponent } from './components/authors/authors.component';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    AddBookComponent,
    EditBookComponent,
    LookBookComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
