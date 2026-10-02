import type { Movie } from "../../types/movie";
import MovieCard from "./movie-card";

type MovieGridProps = {
  movies: Movie[];
  onToggleBookmark: (movieId: number) => void;
};

export default function MovieGrid({ movies, onToggleBookmark }: MovieGridProps) {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-6 p-0 min-[421px]:grid-cols-2 min-[641px]:grid-cols-3 min-[1025px]:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </ul>
  );
}
