import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {LightboxModule} from 'primeng/lightbox';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule, ChartModule, CardModule,CalendarModule,
    AppRoutingModule, LightboxModule,ButtonModule,FormsModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
