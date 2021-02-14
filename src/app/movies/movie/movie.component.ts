import { Component, OnInit } from '@angular/core';
import { MovieModel } from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: MovieModel[];

  constructor(private movieService: MovieService) {}

  getMovies() {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit(): void {
    this.getMovies();
  }
}
