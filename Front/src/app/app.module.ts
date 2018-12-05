
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule,  MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatBottomSheetModule, MatCardModule, MatToolbarModule,MAT_SNACK_BAR_DEFAULT_OPTIONS, MatDatepickerModule, MAT_DATE_LOCALE} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRoute } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BaseRoute,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000},},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
