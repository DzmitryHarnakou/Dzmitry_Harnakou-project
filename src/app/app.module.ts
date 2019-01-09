import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationBarComponent } from './components/side-navigation-bar/side-navigation-bar.component';
import { SideNavigationBarItemComponent } from './components/side-navigation-bar-item/side-navigation-bar-item.component';
import { NavigationService } from './services/navigation.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { EffectsModule } from '@ngrx/effects';
import { FilmsListEffects } from './store/effects/films-list.effects';
import { TvShowListEffects } from './store/effects/tv-shows-list.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers , reducers} from './store/reducers/index';
import { ListItemComponent } from './components/list-item/list-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { TvShowsListComponent } from './components/tv-shows-list/tv-shows-list.component';
import { SubscribeItemWindowComponent } from './components/subscribe-item-window/subscribe-item-window.component';
import { LibraryComponent } from './components/library/library.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { SubscribeMovieComponent } from './components/subscribe-movie/subscribe-movie.component';
import { SubscribeTvShowComponent } from './components/subscribe-tv-show/subscribe-tv-show.component';
import { LocalStorageService } from './services/local-storage.service';
import { MovieDbEffects } from './store/effects/movieDB.effects';
import { SearchFormService } from './services/search-form.service';
import { SupportComponent } from './components/support/support.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { FormTextIputsComponent } from './components/form-text-iputs/form-text-iputs.component';
import { FormLabelsComponent } from './components/form-labels/form-labels.component';
import { FileLoaderComponent } from './components/file-loader/file-loader.component';
import { AboutComponent } from './components/about/about.component';
import { SubscribeLibraryComponent } from './components/subscribe-library/subscribe-library.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationBarComponent,
    SideNavigationBarItemComponent,
    HeaderComponent,
    SearchItemComponent,
    HeaderNavigationComponent,
    SearchFormComponent,
    MovieListComponent,
    ListItemComponent,
    ScrollTopComponent,
    TvShowsListComponent,
    SubscribeItemWindowComponent,
    LibraryComponent,
    CheckboxComponent,
    ProgressbarComponent,
    SubscribeMovieComponent,
    SubscribeTvShowComponent,
    SupportComponent,
    AddMovieComponent,
    FormTextIputsComponent,
    FormLabelsComponent,
    FileLoaderComponent,
    AboutComponent,
    SubscribeLibraryComponent,
    ClickOutsideDirective,
  ],
  imports: [
    FormsModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([FilmsListEffects, TvShowListEffects, MovieDbEffects]),
    InfiniteScrollModule,
  ],
  providers: [NavigationService, LocalStorageService, SearchFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
