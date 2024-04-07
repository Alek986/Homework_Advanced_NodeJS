interface Movie {
    id: string,
    title: string,
    duration: number,
    genre: string,
    hasWonOscar?: boolean
};

let movies: Movie[] = [];

let getId = (title: string): string => {
    if (title) {
        const id = Date.now().toString();
        return id;
    };
    return ""
};

let addMovie = (title: string, duration: number, genre: string, hasWonOscar?: boolean) => {
    let id = getId(title);
    let addedMovie: Movie = { id, title, duration, genre, hasWonOscar };
    movies.push(addedMovie);
};

let printMovies = (moviesArray: Movie[], genre: string = "action") => {
    let filteredMovies = moviesArray.filter(movie => movie.genre === genre);
    filteredMovies.forEach(movie => { console.log(`Title: ${movie.title}, Genre: ${movie.genre}, Duration: ${movie.duration} minutes.`) });
};