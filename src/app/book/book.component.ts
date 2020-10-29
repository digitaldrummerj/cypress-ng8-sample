import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime, tap, map } from 'rxjs/operators';

import { BookService } from '../services/book.service';
import { Book } from '../entities/book';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  searchApp: FormControl = new FormControl();
  book: Book;
  bookId = new FormControl();

  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }
  bookForm: FormGroup = this.formBuilder.group({
    bookId: this.bookId,
    searchApp: this.searchApp,
  });

  ngOnInit() {
    this.searchApp = new FormControl('');

    this.searchBook();
  }
  searchBook() {
    this.bookId.valueChanges.pipe(
      debounceTime(10000),
      switchMap(id => {
        console.log(id);
        return this.bookService.getBook(id);
      })
    ).subscribe(res => {
      this.book = res;
    });
  }

}
