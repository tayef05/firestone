import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptureComponent } from './todos/capture/capture.component';
import { EntireComponent } from './todos/entire/entire.component';
import { SingleComponent } from './todos/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    EntireComponent,
    CaptureComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
