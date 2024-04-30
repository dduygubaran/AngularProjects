import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewApiService {
  constructor(private http: HttpClient) {}

  // newsApiUrl

  newsApiUrl =
    'https://newsapi.org/v2/everything?q=top-headlines&apiKey=b738ed2669c54125aae96fba7c1107d5&pageSize=12';

  // topHeading
  topHeadingService(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
}
