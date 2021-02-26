import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../../providers/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit, OnDestroy {
  public authorizationForm: FormGroup = new FormGroup({        
    "email": new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    "password": new FormControl('', Validators.required)
  });
  public hidePassword: boolean = true;
  public logInError: string = null;

  private _subscription: Array<Subscription> = [];

  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this._subscription.forEach((element) => {
      element.unsubscribe();
    });
  }

  public logIn(): void {
    const email: string = this.authorizationForm.controls['email'].value.trim();
    const password: string = this.authorizationForm.controls['password'].value.trim();

    this._subscription.push(this._authorizationService.logIn(email, password).subscribe(
      (result) => {
        if (!result) {
          this.logInError = 'Ошибка авторизации';

          return;
        }

        this.logInError = null;
        
        this._router.navigate(['/metering-devices']);
      },
      (error) => {
        this.logInError = error?.error?.error?.data?.msg || 'Ошибка авторизации';

        console.error(error);
      },
      () => { }
    ));
  }
}
