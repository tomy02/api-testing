import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test/test.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  form;
  
  
  constructor(private testService: TestService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        title: '',
        author: '',
        pages: ''
      }
    )

  }


  createBook(book) {
    this.testService.createBook(book).subscribe();
  }

  sendNewBook() {
    // console.log(this.form.value);
    let book = this.form.value;
    this.createBook(book);
    this.router.navigate(['books']);
  }
}
