interface Movie {
    id: string,
    title: string,
    duration: number,
    genre: string,
    hasWonOscar?: boolean
};

let movies: Movie[] = [];

const getId = (title: string): string => {
    if (title) {
        const id = Date.now().toString();
        return id;
    };
    return ""
};

const addMovie = (title: string, duration: number, genre: string, hasWonOscar?: boolean) => {
    const id = getId(title);
    const addedMovie: Movie = { id, title, duration, genre, hasWonOscar };
    movies.push(addedMovie);
};

const printMovies = (moviesArray: Movie[], genre: string = "action") => {
    const filteredMovies = moviesArray.filter(movie => movie.genre === genre);
    filteredMovies.forEach(movie => { console.log(`Title: ${movie.title}, Genre: ${movie.genre}, Duration: ${movie.duration} minutes.`) });
};