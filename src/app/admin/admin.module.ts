import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';



@NgModule({
  declarations: [AdminComponent, UsersComponent, MoviesComponent, AddMovieComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
