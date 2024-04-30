import { Component, OnInit } from '@angular/core';
import { NewApiService } from '../services/new-api.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css'],
})

export class HealthNewsComponent implements OnInit {

  displayHealthNews: any = [];

  constructor(private newApiService: NewApiService) {}

  ngOnInit(): void {
    this.healthNews();
  }

  healthNews() {
    this.newApiService.healthNewsService().subscribe((data) => {
      console.log(data);
      this.displayHealthNews = data.articles;
    });
  }
}
