import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../../core/models/movies';
import { PhimService } from '../../../../core/services/phim.service'

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  danhSachPhim: Movie[];
  // danhSachPhim = [];
  loading: boolean = false;
  error: boolean = false;
  slides = [

  ]
  slideConfig = {dots: false};
  // moviesPerSlide = 8;

  constructor(private moviesService: PhimService) {}
  
  ngOnInit(): void {
    this.loading = true;

    this.moviesService.layDanhSachPhim().subscribe({
      next: (listPhim) => {
        this.loading = false;
        // for(let i=0; i < listPhim.length; i += this.moviesPerSlide){
        //   this.danhSachPhim.push(listPhim.slice(i, i + this.moviesPerSlide));
        // }

      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
      complete: () => {

      }
    });

    this.moviesService.movieList.subscribe({
      next: (result) => {
        this.danhSachPhim = result;
      },
    });
  }
}