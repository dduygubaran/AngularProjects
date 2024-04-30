import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {path:'', component: TopHeadingComponent},         // Home
  {path:'tech', component: TechNewsComponent},       // Tech News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
