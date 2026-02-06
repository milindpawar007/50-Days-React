import { useEffect, useState } from "react";

import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToFav from "./components/AddToFav";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
 const [favorites, setFavorites] = useState<Movie[]>(() => {
  const saved = localStorage.getItem("favorites");

  return saved ? JSON.parse(saved) : [];
});
  const [search, setSearch] = useState("Batman");

  useEffect(() => {
    async function fetchMovies() {
      if (!search.trim()) {
        setMovies([]);
        return;
      }

      const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
        search
      )}&apikey=85413387`;

      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.Search ?? []);
    }

    fetchMovies();
  }, [search]);

  useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.imdbID === movie.imdbID);

      if (exists) {
        return prev.filter((m) => m.imdbID !== movie.imdbID);
      }

      return [...prev, movie];
    });
  };

  return (
    <div className="movie-app container-fluid">
      <div className="row align-items-center mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox search={search} setSearch={setSearch} />
      </div>

      <MovieList
        movies={movies}
        favorites={favorites}
        onFavClick={toggleFavorite}
        FavComponent={AddToFav}
      />

      <div className="row mt-5 mb-3">
        <MovieListHeading heading="Favorites" />
      </div>

      {/* IMPORTANT: show favorites here */}

      <MovieList
        movies={favorites}
        favorites={favorites}
        onFavClick={toggleFavorite}
        FavComponent={AddToFav}
      />
      
    </div>
  );
}

export default App;
