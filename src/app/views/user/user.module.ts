import { CommonModule } from '@angular/common';
import { ComponentsStateButtonModule } from '@delegation/components/state-button/components.state-button.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from '@delegation/shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, UserComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    ComponentsStateButtonModule
  ]
})
export class UserModule { }
