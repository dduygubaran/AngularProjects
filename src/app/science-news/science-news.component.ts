import { Component } from '@angular/core';
import { NewApiService } from '../services/new-api.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent {

  displayScienceNews: any = [];

  constructor(private newApiService: NewApiService) {}

  ngOnInit(): void {
    this.scienceNews();
  }

  scienceNews() {
    this.newApiService.scienceNewsService().subscribe((data) => {
      console.log(data);
      this.displayScienceNews = data.articles;
    });
  }

}
