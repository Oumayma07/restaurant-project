import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
  const isLoggedIn =
    typeof window !== 'undefined' && !!localStorage.getItem('token');
  if (!isLoggedIn) {
    if (typeof window !== 'undefined') {
      this.router.navigate(['/login']);
    }
    return false;
  }
  return true;
}

}
