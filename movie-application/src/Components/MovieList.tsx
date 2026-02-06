import React from "react";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type Props = {
   movies: Movie[];
  favorites: Movie[];
  onFavClick: (movie: Movie) => void;
  FavComponent: React.FC<{ isFav: boolean }>;
};

const MovieList: React.FC<Props> = ({
  movies,
  favorites,
  onFavClick,
  FavComponent,
}) => {
  return (
    <div className="movie-row">
      {movies.map((movie) => {
        const isFav = favorites.some(
          (f) => f.imdbID === movie.imdbID
        );

        return (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />

            <div
              className="movie-overlay"
              onClick={() => onFavClick(movie)}
            >
              <FavComponent isFav={isFav} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
