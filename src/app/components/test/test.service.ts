import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})

export class TestService {

    apiUrl = '';

    constructor(

        private httpClient: HttpClient,
    ) {
        this.apiUrl = environment.apiUrl;
    }

    //GET
    // tslint:disable-next-line: no-any
    getBooks(): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}books`);
    }
    //GET
    getBook(id): Observable<any> {
        return this.httpClient.get(`${this.apiUrl}books`+ `/${id}`);
    }
    //POST
    createBook(book) {
        return this.httpClient.post(`${this.apiUrl}books`, book);
    }

    //PUT
    updateBook(id, book) {
        return this.httpClient.put(this.apiUrl + `books/${id}`, book);
    }
    //DELETE
    deleteBook(id) {
        return this.httpClient.delete(this.apiUrl + `books/${id}`);
    }

 }
