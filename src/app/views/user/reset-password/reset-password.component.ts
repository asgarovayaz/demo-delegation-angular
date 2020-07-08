import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationType, NotificationsService } from 'angular2-notifications';

import { AuthService } from '@delegation/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild('resetForm') resetForm: NgForm;
  emailModel = 'demo@delegation.com';
  passwordModel = 'demodelegation1122';

  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthService, private notifications: NotificationsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.resetForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

  //   this.authService.resetPassword().subscribe(() => {
   }
}
