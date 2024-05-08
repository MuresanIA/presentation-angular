import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OldAuthGuard implements CanActivate {
    constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user is logged in based on localStorage data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername && storedPassword) {
      // User is logged in
      return true;
    } else {
      // User is not logged in, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}