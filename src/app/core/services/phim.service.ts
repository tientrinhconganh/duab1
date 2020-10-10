import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators'
import { Movie } from '../models/movies'
@Injectable({
  providedIn: 'root'
})
export class PhimService {

  movieListSubject = new BehaviorSubject([]);
  movieList = this.movieListSubject.asObservable();

  constructor(private api: ApiService) {}

  layDanhSachPhim(): Observable<Movie[]> {
    const url = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP03';
    return this.api.get<Movie[]>(url).pipe(
      tap((result) => {
        this.movieListSubject.next(result);
      })
    );
  }
}
