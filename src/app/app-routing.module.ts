import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AuthorResolver } from './components/authors/author.resolver';
import { AuthorsComponent } from './components/authors/authors.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { LookBookComponent } from './components/look-book/look-book.component';
import { TestComponent } from './components/test/test.component';
import { TestResolver } from './components/test/test.resolver';

const routes: Routes = [
  {
    path: 'books', component: TestComponent, pathMatch: 'full', resolve: {books: TestResolver} 
  },
  {
    path: 'books/add', component: AddBookComponent, pathMatch: 'full'
  },
  {
    path: 'books/edit/:id', component: EditBookComponent, pathMatch: 'full'
  },
  {
    path: 'books/look/:id', component: LookBookComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'books', pathMatch: 'full'
  },
  {
    path: 'authors', component: AuthorsComponent, pathMatch: 'full', resolve: {authors: AuthorResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
