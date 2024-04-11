interface IMovie {
    id: string,
    title: string,
    duration: number,
    genre: string,
    hasWonOscar?: boolean
};

class Movie implements IMovie {
    private movieId: string;
    private movieTitle: string;
    private movieDuration: number;
    private movieGenre: string;
    private movieHasWonOscar?: boolean;

    constructor (id: string, title: string, duration: number, genre: string, hasWonOscar?: boolean){
        this.movieId = this.getId(title);
        this.movieTitle = title;
        this.movieDuration = duration;
        this.movieGenre = genre;
        this.movieHasWonOscar = hasWonOscar
    };

    get id(): string {
        return this.movieId
    };

    get title(): string {
        return this.movieTitle
    };

    get duration(): number {
        return this.movieDuration
    };

    get genre(): string {
        return this.movieGenre
    };

    get hasWonOscar(): boolean | undefined {
        return this.movieHasWonOscar
    };

    getId (title: string): string {
        if (title) {
            const id = Date.now().toString();
            return id;
        };
        return ""
    };
};


class movieLibrary {
    movies: IMovie[];

    constructor(){
        this.movies = [];
    };
    
    addMovie(movie: Movie){
        this.movies.push(movie);
    };

    printMovies(genre: string = "action"){
        const filteredMovies = this.movies.filter(movie => movie.genre === genre);
        filteredMovies.forEach(movie => {console.log(`Title: ${movie.title}, Genre: ${movie.genre}, Duration: ${movie.duration} minutes.`)});
    };

   static movieDetail(movie: Movie):string {
        return `Movie name is: ${movie.title} and the movie genre is: ${movie.genre}`
    };
};


const moviesLibrary = new movieLibrary();

const movieOne = new Movie("Dune", "Dune", 180, "sci-fi", false);
const movieTwo = new Movie("StarTrek", "StarTrek", 120, "sci-fi", false);
const movieThree = new Movie("Lord of the Rings", "Lord of the Rings", 180, "sci-fi, adventure", false);
const movieFour = new Movie("Leon", "Leon", 110, "action", true);


moviesLibrary.addMovie(movieOne);
moviesLibrary.addMovie(movieTwo);
moviesLibrary.addMovie(movieThree);
moviesLibrary.addMovie(movieFour);


moviesLibrary.printMovies("sci-fi");
moviesLibrary.printMovies();