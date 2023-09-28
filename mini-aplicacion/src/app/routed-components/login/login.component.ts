import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Campo requerido';
    } else {
      return control.hasError('email') ? 'Email inválido' : '';
    }
  }

  loginIfValid(emailValue: string | null, passwwordValue: string | null) {
    if (emailValue !== null && passwwordValue !== null) {
      if (this.authService.login(emailValue, passwwordValue)) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
