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

  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }
  book: Book;
  bookId = new FormControl();
  bookForm: FormGroup = this.formBuilder.group({
    bookId: this.bookId
  });

  ngOnInit() {
    this.searchBook();
  }
  searchBook() {
    this.bookId.valueChanges.pipe(
      debounceTime(1000),
      switchMap(id => {
        console.log(id);
        return this.bookService.getBook(id);
      })
    ).subscribe(res => {
      this.book = res;
    });
  }

}
