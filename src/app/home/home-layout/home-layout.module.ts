import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from './slider/slider.module';
import { HomeLayoutComponent } from './home-layout.component'
import { MoviesModule } from './movies/movies.module';
import { UngDungComponent } from './ung-dung/ung-dung.component'

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { NewsModule } from './news/news.module'



@NgModule({
  declarations: [HomeLayoutComponent, UngDungComponent, CumRapComponent],
  imports: [
    CommonModule,
    SliderModule,
    MoviesModule,
    SlickCarouselModule,
    NewsModule
  ],
  // exports: [
  //   HomeLayoutComponent, UngDungComponent, CumRapComponent
  // ]
})
export class HomeLayoutModule { }
