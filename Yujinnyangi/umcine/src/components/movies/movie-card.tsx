import { Link } from "@tanstack/react-router";
import type { Movie } from "../../types/movie";
import { cn } from "../../utils/cn";

type MovieCardProps = {
  movie: Movie;
  onToggleBookmark: (movieId: number) => void;
};

export default function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <li className="list-none text-left">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-(--code-bg)">
        <Link
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
          aria-label={`${movie.title} 상세 보기`}
        >
          <img
            src={movie.posterPath}
            alt={movie.title}
            className="block h-full w-full object-cover"
          />
        </Link>
        <button
          type="button"
          className={cn(
            "absolute right-2 top-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-none p-0",
            movie.isBookmarked ? "bg-white" : "bg-white/90",
          )}
          aria-pressed={movie.isBookmarked}
          aria-label={movie.isBookmarked ? "북마크 해제" : "북마크 추가"}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            className="h-3.5 w-3.5"
            src={
              movie.isBookmarked
                ? "/icons/bookmark.svg"
                : "/icons/bookmark-outline.svg"
            }
            alt=""
          />
        </button>
      </div>
      <p className="mt-3 truncate text-sm font-semibold text-(--text-h)">
        <Link to="/movies/$movieId" params={{ movieId: String(movie.id) }}>
          {movie.title}
        </Link>
      </p>
      <p className="mt-1 text-xs text-(--text)">{movie.releaseDate}</p>
    </li>
  );
}
