import { Routes } from '@angular/router';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { TvShowsListComponent } from '../components/tv-shows-list/tv-shows-list.component';
import { LibraryComponent } from '../components/library/library.component';
import { SubscribeMovieComponent } from '../components/subscribe-movie/subscribe-movie.component';
import { SubscribeTvShowComponent } from '../components/subscribe-tv-show/subscribe-tv-show.component';
import { SupportComponent } from '../components/support/support.component';

export const movieListRoutes:Routes = [
    { path: 'details', component: SubscribeMovieComponent},
];

export const tvShowListRoutes:Routes = [
    { path: 'details', component: SubscribeTvShowComponent},
]

export const appRoutes: Routes =[
    { path: 'movie', component: MovieListComponent, children: movieListRoutes},
    { path: 'tv#shows', component: TvShowsListComponent, children: tvShowListRoutes},
    { path: 'my#library', component: LibraryComponent},
    { path: 'support', component: SupportComponent},
    { path: '**', redirectTo: 'movie', pathMatch: 'full'},
];

