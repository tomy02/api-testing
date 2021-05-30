import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from './test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  bookList;

  constructor(private testService: TestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.bookList = this.route.snapshot.data.books;

    
  }


  deleteBook(id) {
    this.testService.deleteBook(id).subscribe(
      res => {
        this.testService.getBooks().subscribe(
          resp => {
            this.bookList = resp;
          }
        )
      }
    );
    
  }

  goEdit(id) {
    this.router.navigate([`books/edit/${id}`]);
  }

  goLook(id) {
    this.router.navigate([`books/look/${id}`]);
  }

}
