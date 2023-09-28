import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

person: any = {
  userName: 'master8@lemoncode.net',
  password: '12345678'
}

  constructor() { }

  isLoggedIn = false;

  login(username: string, password: string): boolean{
    if (username === this.person.userName && password === this.person.password) {
      this.isLoggedIn = true;

    } else {
      alert('Usuario y/o contraseña invalido')
    }
    localStorage.setItem('isLogged', JSON.stringify(this.isLoggedIn));
    return this.isLoggedIn;
  }

  isLogged(): boolean {
    const stringLogged = localStorage.getItem('isLogged');
    if (stringLogged !== null){
      const booleanLogged = JSON.parse(stringLogged)
      return booleanLogged;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
}
