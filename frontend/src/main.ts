import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';


bootstrapApplication(AppComponent, {
  providers:[
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      NgxSpinnerModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        closeButton: true,
        progressBar: true
      }),
      RouterModule.forRoot(routes)
    )
  ]
})