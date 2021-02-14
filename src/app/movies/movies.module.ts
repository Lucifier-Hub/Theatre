import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent, SearchComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MoviesComponent, MoviesComponent, SearchComponent],
})
export class MoviesModule {}
