import { Component, OnInit } from '@angular/core';
import { NewApiService } from '../services/new-api.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css'],
})

export class TechNewsComponent implements OnInit {

  constructor(private newApiService: NewApiService) {}

  displayTechNews: any = [];

  ngOnInit(): void {
    this.techNews();
  }

  techNews() {
    this.newApiService.techNewsService().subscribe((data) => {
      console.log(data);
      this.displayTechNews = data.articles;
    });
  }
}
