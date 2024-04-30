import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';

const routes: Routes = [
  {path:'', component: TopHeadingComponent},         // Home
  {path:'tech', component: TechNewsComponent},       // Tech News
  {path:'science', component: ScienceNewsComponent}, // Science News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
