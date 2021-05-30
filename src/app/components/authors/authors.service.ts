import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class AuthorService {

    apiUrl = '';

    constructor(

        private httpClient: HttpClient,
    ) {
        this.apiUrl = environment.apiUrl;
    }

    //GET
    // tslint:disable-next-line: no-any
    getAuthors(): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}authors`);
    }
    //GET
    getAuthor(id): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}authors`+ `/${id}`);
    }
    //POST
    createAuthor(author) {
        return this.httpClient.post(`${this.apiUrl}authors`, author);
    }

    //PUT
    updateAuthor(id, author) {
        return this.httpClient.put(this.apiUrl + `authors/${id}`, author);
    }
    //DELETE
    deleteAuthor(id) {
        return this.httpClient.delete(this.apiUrl + `authors/${id}`);
    }

 }