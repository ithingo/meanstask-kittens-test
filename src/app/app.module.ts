import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddKittensComponent } from './components/add-kittens/add-kittens.component';
import { EditKittensComponent } from './components/edit-kittens/edit-kittens.component';
import { KittensListComponent } from './components/kittens-list/kittens-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddKittensComponent,
    EditKittensComponent,
    KittensListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
