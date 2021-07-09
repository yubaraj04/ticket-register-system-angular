import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './atuhguard/auth.guard';

const routes: Routes = [
  { path: 'flight-registration', component: RegistrationComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "", component: DashboardComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
