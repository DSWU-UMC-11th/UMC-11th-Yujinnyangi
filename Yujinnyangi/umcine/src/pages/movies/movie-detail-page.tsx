import { Link, useParams } from "@tanstack/react-router";
import { movies } from "../../data/movies";

export function MovieDetailPage() {
  const { movieId } = useParams({ from: "/movies/$movieId" });
  const movie = movies.find((item) => item.id === Number(movieId));

  if (!movie) {
    return (
      <main className="mx-auto w-full max-w-[1440px] p-10">
        영화를 찾을 수 없어요.
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden text-left">
      <img
        src={movie.backdropPath}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 p-10 text-white md:flex-row">
        <img
          src={movie.posterPath}
          alt={`${movie.title} 포스터`}
          className="aspect-[2/3] w-64 shrink-0 self-start rounded-lg object-cover shadow-lg"
        />
        <div className="flex flex-col gap-3">
          <Link to="/" className="text-sm text-white/70">
            ← 영화 목록
          </Link>
          <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
          <p className="text-white/70">{movie.originalTitle}</p>
          <p className="text-sm text-white/70">
            {movie.releaseDate} · {movie.genres.join(" · ")} · {movie.runtime}
          </p>
          <h2 className="mt-4 text-xl text-white">{movie.tagline}</h2>
          <p className="max-w-2xl leading-relaxed text-white/90">
            {movie.overview}
          </p>
        </div>
      </div>
    </main>
  );
}
