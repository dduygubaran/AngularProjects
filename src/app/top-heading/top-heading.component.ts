import { Component, OnInit } from '@angular/core';
import { NewApiService } from '../services/new-api.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit{

  constructor(private newApiService: NewApiService) {}

  displayTopHeading: any = [];

  ngOnInit(): void {
 this.topHeading();
  }

  topHeading() {
    this.newApiService.topHeadingService().subscribe((result) => {
      console.log(result);
      this.displayTopHeading = result.articles;
    });
  }

}
