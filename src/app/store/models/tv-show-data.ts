import { TvShowListItem } from '../models/tv-show-list-item';

export interface TvShowData {
    page: number;
    total_results: number;
    total_pages: number;
    results: TvShowListItem[];
}