import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const newAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // Check if user is logged in based on localStorage data
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  if (storedUsername && storedPassword) {
    // User is logged in
    return true;
  } else {
    // User is not logged in, redirect to login page
    router.navigate(['/']);
    return false;
  }
};
