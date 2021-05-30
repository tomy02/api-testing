import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorService } from './authors.service';


@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line: no-any
export class AuthorResolver implements Resolve<any> {
    constructor(
        private service: AuthorService,
    )   {
    }

    // tslint:disable-next-line: no-any
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.getAuthors();
    }
}