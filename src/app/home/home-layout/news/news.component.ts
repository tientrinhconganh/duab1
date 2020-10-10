import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  loaiTinTuc: string = 'dienAnh';
  constructor() { }

  ngOnInit(): void {
  }

  selection(value){
    this.loaiTinTuc = value;
  }
}
