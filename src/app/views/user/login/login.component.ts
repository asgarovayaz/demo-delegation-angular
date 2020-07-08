import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationType, NotificationsService } from 'angular2-notifications';

import { AuthService } from '@delegation/services/auth.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  emailModel = 'demo@gymdata.online';
  passwordModel = 'demo123';

  buttonDisabled = false;
  buttonState = '';

  returnUrl: string;
  error = '';

  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute,
    private notifications: NotificationsService, 
    private router: Router
    ) { }

  ngOnInit() {





    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    this.authService.signIn(this.loginForm.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.error = error;
            this.buttonState = '';
        });
  }
}
