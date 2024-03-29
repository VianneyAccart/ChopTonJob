import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canAccess: boolean;

  constructor(private router: Router) {
    this.canAccess = false;
  }

  // Block the access at chop-ton-job.web.app/result if search form isn't used
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.canAccess === false) this.router.navigate(['/404']);
    return this.canAccess;
  }
}
