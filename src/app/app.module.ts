import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule} from '@angular/common/http';
import { NewApiService } from './services/new-api.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component'

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechNewsComponent,
    ScienceNewsComponent,
    SportNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
