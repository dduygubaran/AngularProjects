import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewApiService {
  constructor(private http: HttpClient) {}

  // newsApiUrl

  newsApiUrl = 'https://newsapi.org/v2/everything?q=top-headlines&apiKey=b738ed2669c54125aae96fba7c1107d5&pageSize=12';
  techNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';
  scienceNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';
  sportNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';
  healthNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1c5e2237fcd342bf86e1cc62c9d23654';

  // topHeading
  topHeadingService(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  //techNews
  techNewsService(): Observable<any> {
    return this.http.get(this.techNewsApiUrl);
  }

  //scienceNews
  scienceNewsService(): Observable<any> {
    return this.http.get(this.scienceNewsApiUrl);
  }

  //sportNews
  sportNewsService(): Observable<any> {
    return this.http.get(this.sportNewsApiUrl);
  }

  //healthNews
  healthNewsService(): Observable<any> {
    return this.http.get(this.healthNewsApiUrl);
  }
}
