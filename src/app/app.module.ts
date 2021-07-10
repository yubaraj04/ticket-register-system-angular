import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationModule } from './registration/registration.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { PaymentModule } from './payment/payment.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { LoginService } from './login/login.service';
import { AuthGuard } from './atuhguard/auth.guard';
import { AuthInterceptor } from './atuhguard/auth.interceptor';
import { LinechartComponent } from './charts/linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PaymentComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegistrationModule,
    PaymentModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [LoginService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
