import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mini-aplicacion';
  userName = this.authService.person.userName;
  isLoggued = this.authService.isLoggedIn;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    // comprueba si está logueado al momento de refrescar página
    if (this.authService.isLogged() === false) {
      this.router.navigate(['/login']);
    }
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logout() {
    this.router.navigate(['/login']);
    return this.authService.logout();
  }
}
