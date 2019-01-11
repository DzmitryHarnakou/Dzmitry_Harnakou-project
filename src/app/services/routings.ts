import { Routes } from '@angular/router';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { TvShowsListComponent } from '../components/tv-shows-list/tv-shows-list.component';
import { LibraryComponent } from '../components/library/library.component';
import { SubscribeMovieComponent } from '../components/subscribe-movie/subscribe-movie.component';
import { SubscribeTvShowComponent } from '../components/subscribe-tv-show/subscribe-tv-show.component';
import { SupportComponent } from '../components/support/support.component';
import { AboutComponent } from '../components/about/about.component';
import { SubscribeLibraryComponent } from '../components/subscribe-library/subscribe-library.component';

export const movieListRoutes:Routes = [
    { path: 'details', component: SubscribeMovieComponent},
];

export const tvShowListRoutes:Routes = [
    { path: 'details', component: SubscribeTvShowComponent},
]

export const libraryRoutes:Routes = [
    { path: 'details', component: SubscribeLibraryComponent}
]

export const appRoutes: Routes =[
    { path: 'movie', component: MovieListComponent, children: movieListRoutes},
    { path: 'tvShows', component: TvShowsListComponent, children: tvShowListRoutes},
    { path: 'myLibrary', component: LibraryComponent, children: libraryRoutes},
    { path: 'support', component: SupportComponent},
    { path: 'about' , component: AboutComponent},
    { path: '**', redirectTo: 'movie', pathMatch: 'full'},
    
];

