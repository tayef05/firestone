import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { RoutingComponent } from './routing/routing.component';
import { AuthService } from './shared/services/auth.service';
import { CaptureComponent } from './todos/capture/capture.component';
import { EntireComponent } from './todos/entire/entire.component';
import { SingleComponent } from './todos/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    EntireComponent,
    CaptureComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    RoutingComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
