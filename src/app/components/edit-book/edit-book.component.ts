import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test/test.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id;
  book;
  form;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private testService: TestService, private router: Router,) { }


  ngOnInit(): void {

     this.form = this.formBuilder.group(
      {
        title: '',
        author: '',
        pages: ''
      }
    );

    this.id = this.route.snapshot.params.id;

    this.testService.getBook(this.id).subscribe(
      res => {
        this.book = res
        this.form.controls.title.setValue(this.book.title);
        this.form.controls.author.setValue(this.book.author);
        this.form.controls.pages.setValue(this.book.pages);
      }
    );
    

  }

  sendEditBook() {
    this.book = this.form.value;
    this.book.id = this.id;
    this.testService.updateBook(this.id, this.book).subscribe();
    this.router.navigate(['books']);
  }

}
