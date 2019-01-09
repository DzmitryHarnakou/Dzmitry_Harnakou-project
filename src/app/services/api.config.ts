export const apiUrl = {
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=7b4fdbd696ddc786e777b7dea10a4b36&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=",
    showUrl: "https://api.themoviedb.org/3/tv/popular?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US&page=",
    genreUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US",
    imageUrl: "https://image.tmdb.org/t/p/w500",
    xTraImg: "url(https://www.themoviedb.org/assets/1/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png)"    
}

export function getMovieSearcLink (adult:boolean, title:string, overview: string, page: number) {
    return  "https://api.themoviedb.org/3/search/movie?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US&query="+title.replace( /\s/g, "%20").toLocaleLowerCase()+"%20"+overview.replace( /\s/g, "%20").toLocaleLowerCase()+"&page="+String(page)+"&include_adult="+adult;
}

export function getTvShowSearchLink (title:string, overview: string, page: number) {
    return "https://api.themoviedb.org/3/search/tv?api_key=7b4fdbd696ddc786e777b7dea10a4b36&language=en-US&query="+title.replace( /\s/g, "%20").toLocaleLowerCase()+"%20"+overview.replace( /\s/g, "%20").toLocaleLowerCase()+"&page="+String(page);
}