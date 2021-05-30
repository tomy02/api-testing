import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorList;

  constructor(private authorService: AuthorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorList = this.route.snapshot.data.authors
    // this.authorService.getAuthors().subscribe(
    //   res => this.authorList = res
    // );
  }

}
