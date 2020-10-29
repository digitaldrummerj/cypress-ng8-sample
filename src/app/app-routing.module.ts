import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    component: BookComponent,
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
