import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { of } from 'rxjs';
import { filter, debounceTime, tap, switchMap, catchError, distinctUntilChanged } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import { throwError as observableThrowError } from 'rxjs';
import { Book } from '../entities/book';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  searchBook: FormControl = new FormControl();
  searchBookResults = new Array<Book>();

  bookFormGroup: FormGroup;

  isLoading = false;

  isLoadingBooks = false;

  listBooks: Array<KeyValue<string, string>> = [];

  searchBook2: FormControl = new FormControl();
  searchBookResults2 = new Array<Book>();

  bookFormGroup2: FormGroup;

  isLoading2 = false;

  isLoadingBooks2 = false;

  listBooks2: Array<KeyValue<string, string>> = [];

  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.setupForm();
    this.setupForm2();
  }

  setupForm() {
    this.bookFormGroup = this.formBuilder.group({
      searchBook: this.searchBook
    });

    this.setupSubscriptions();
  }

  setupSubscriptions() {
    this.searchBook.valueChanges
      .pipe(
        filter(term => term && typeof term === 'string'),
        // debounceTime(2000),
        distinctUntilChanged(),
        tap((term) => {
          if (term.trim().length > 0) {
            this.isLoadingBooks = true;

          } else if (term.trim() === 0) {
            this.isLoadingBooks = false;

          }
          this.searchBookResults = [];
        }),
        switchMap(term => term.trim().length > 0 ? this.bookService.search(term.trim().replace(/\s\s+/g, ' ')).pipe(catchError((err) => {
          this.isLoadingBooks = false;

          this.searchBook.reset();
          return observableThrowError(err);
        })) : of([])))
      .subscribe(response => {
        console.log('response', response);
        if (response.length > 0) {
          response = _.orderBy(response, [app => app.name.toLowerCase()]);
          this.searchBookResults = response;
        }

        this.isLoadingBooks = false;
      });
  }

  resetBook() {
    this.searchBook.reset();
  }

  selectBook($event) {

    const app = $event.option.value;

    const addApp: KeyValue<string, string> = { key: app.id, value: app.name };

    this.listBooks = [];
    this.listBooks.push(addApp);
    this.resetBook();
  }

  displayBook(app?: any): string {
    console.log('app 1', app);
    return app ? app.name : '';
  }

  setupForm2() {
    this.bookFormGroup2 = this.formBuilder.group({
      searchBook2: this.searchBook2
    });

    this.setupSubscriptions2();
  }

  setupSubscriptions2() {
    this.searchBook2.valueChanges
      .pipe(
        filter(term => term && typeof term === 'string'),
        debounceTime(2000),
        distinctUntilChanged(),
        tap((term) => {
          if (term.trim().length > 0) {
            this.isLoadingBooks2 = true;

          } else if (term.trim() === 0) {
            this.isLoadingBooks2 = false;

          }
          this.searchBookResults2 = [];
        }),
        switchMap(term => term.trim().length > 0 ? this.bookService.search(term.trim().replace(/\s\s+/g, ' ')).pipe(catchError((err) => {
          this.isLoadingBooks2 = false;

          this.searchBook2.reset();
          return observableThrowError(err);
        })) : of([])))
      .subscribe(response => {
        console.log('response', response);
        if (response.length > 0) {
          response = _.orderBy(response, [app => app.name.toLowerCase()]);
          this.searchBookResults2 = response;
        }

        this.isLoadingBooks2 = false;
      });
  }

  resetBook2() {
    this.searchBook2.reset();
  }

  selectBook2($event) {
    const app = $event.option.value;

    const addApp: KeyValue<string, string> = { key: app.id, value: app.name };

    this.listBooks2 = [];
    this.listBooks2.push(addApp);
    this.resetBook2();
  }

  displayBook2(app?: any): string {
    console.log('app', app);
    return app ? app.name : '';
  }
}
