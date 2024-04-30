import { Component, OnInit } from '@angular/core';
import { NewApiService } from '../services/new-api.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css'],
})

export class SportNewsComponent implements OnInit {

  displaySportNews: any = [];

  constructor(private newApiService: NewApiService) {}

  ngOnInit(): void {
    this.sportNews();
  }

  sportNews() {
    this.newApiService.sportNewsService().subscribe((data) => {
      console.log(data);
      this.displaySportNews = data.articles;
    });
  }
}
