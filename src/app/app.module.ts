import { PersonService } from './person/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PersonComponent} from './person/person.component';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, PersonComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
