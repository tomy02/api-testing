import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test/test.service';

@Component({
  selector: 'app-look-book',
  templateUrl: './look-book.component.html',
  styleUrls: ['./look-book.component.css']
})
export class LookBookComponent implements OnInit {

  book;
  id;
  constructor(private route: ActivatedRoute, private testService: TestService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;

    this.testService.getBook(this.id).subscribe(
      res => {
        this.book = res
      }
    );
  }

}
