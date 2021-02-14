import { Injectable } from '@angular/core';
import { MovieModel } from './movie.model';
import { MovieList } from './movie-list';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovies(): MovieModel[] {
    return MovieList;
  }
}
