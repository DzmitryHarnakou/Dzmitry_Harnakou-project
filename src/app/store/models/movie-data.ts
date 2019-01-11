import { MovieListItem } from '../models/movie-list-item';

export interface MovieData {
    page: string;
    results: MovieListItem[];
    total_pages: number;
    total_results: number;
}
