import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogTable, TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatRadioModule } from '@angular/material/radio';
// import {FormsMopde} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
// import
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogTable
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule
    // MatFormFieldControl
  ],
  providers: [
    HttpClient,
    AsyncPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
