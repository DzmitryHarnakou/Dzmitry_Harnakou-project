import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  public genres = {
  Action: 28,
  Adventure: 12,
  Thriller: 53,
  Comedy: 35,
  Fantasy: 14,
  Drama: 18,
  Horror: 27,
  Criminal: 80,
  War: 10752,
  Documentary: 99
  };

  public genres_ids: number[];
  public key: string;

  constructor () {
    
  }

  public getGenresArr (key:string, genres) {
    this.genres_ids = this.genres_ids.push[genres.key];
  }
}
