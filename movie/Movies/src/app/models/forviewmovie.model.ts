import { Movie } from "./movie.model";

export class Forviewmovie{

    id: number;
    movies: Movie[];
    watchdatetime: Date;
    movieIds?: number[];
}