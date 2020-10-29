import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { Book } from '../entities/book';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.bookUrl}/${id}`).pipe(
      catchError(err => of(null))
    );
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.bookUrl}/`).pipe(
      catchError(err => of(null))
    );
  }
}
