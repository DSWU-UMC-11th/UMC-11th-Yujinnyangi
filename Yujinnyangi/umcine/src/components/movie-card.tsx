import type { Movie } from "../types/movie";
import "./movie-card.css";

type MovieCardProps = {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
};

export default function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <li className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          src={movie.posterPath}
          alt={movie.title}
          className="movie-card__poster"
        />
        <button
          type="button"
          className="movie-card__bookmark"
          aria-pressed={movie.isBookmarked}
          aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            src={
              movie.isBookmarked
                ? "/icons/bookmark.svg"
                : "/icons/bookmark-outline.svg"
            }
            alt=""
          />
        </button>
      </div>
      <p className="movie-card__title">{movie.title}</p>
      <p className="movie-card__date">{movie.releaseDate}</p>
    </li>
  );
}
