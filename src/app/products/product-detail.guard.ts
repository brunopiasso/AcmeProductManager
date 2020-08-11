import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path; //+ sign here converts the url string to a number

      if (isNaN(id) || id < 1) { //Nan = Not a number
        alert("Invalid product Id"); //We don't normally want to display an alert here. In a real app we route to an error page.
        this.router.navigate(['/products']);
        return false;
      };
    return true;
  }
  
}
