import {inject} from '@angular/core';
import {AuthResource} from '../services/auth.resource.service';
import {CanActivateFn, Router} from '@angular/router';
import {map} from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(AuthResource).status$.pipe(
    map(isAuthenticated => isAuthenticated || router.createUrlTree(['/auth']))
  );
};
