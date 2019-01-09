import { MovieListItem } from '../models/movie-list-item';
import { TvShowListItem } from '../models/tv-show-list-item';

export interface MovieData {
    page: string;
    results: MovieListItem[] | TvShowListItem;
    total_pages: number;
    total_results: number;
}
