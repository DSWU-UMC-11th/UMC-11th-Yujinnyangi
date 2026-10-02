import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState, type SubmitEvent } from "react";
import { movies } from "../../data/movies";

export function SearchPage() {
  const { query } = useSearch({ from: "/search" });
  const navigate = useNavigate({ from: "/search" });
  const [searchText, setSearchText] = useState(query ?? "");

  useEffect(() => {
    setSearchText(query ?? "");
  }, [query]);

  const normalizedQuery = query?.trim().toLowerCase() ?? "";
  const searchResults = normalizedQuery
    ? movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.originalTitle.toLowerCase().includes(normalizedQuery),
      )
    : [];

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = searchText.trim();
    navigate({
      search: nextQuery ? { query: nextQuery } : {},
    });
  }

  return (
    <main className="mx-auto w-full max-w-[1440px] p-10 text-left">
      <h1 className="mb-6 text-2xl font-bold text-(--text-h)">영화 검색</h1>
      <form onSubmit={handleSubmit} className="mb-8 flex gap-2">
        <input
          aria-label="검색어"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="영화 제목을 입력하세요"
          className="h-10 flex-1 rounded-md border border-(--border) bg-(--bg) px-3 text-sm text-(--text-h) outline-none focus:border-(--text-h)"
        />
        <button
          type="submit"
          className="h-10 cursor-pointer rounded-md border-none bg-[#2f6feb] px-5 text-sm font-semibold text-white"
        >
          검색
        </button>
      </form>

      {!normalizedQuery ? (
        <p className="text-(--text)">검색어를 입력해 주세요.</p>
      ) : (
        <>
          <h2 className="text-xl">‘{query}’ 검색 결과</h2>
          <p className="mb-6 mt-1 text-sm text-(--text)">
            영화 {searchResults.length}편
          </p>
          {searchResults.length === 0 ? (
            <p className="text-(--text)">검색 결과가 없어요.</p>
          ) : (
            <ul className="m-0 flex list-none flex-col gap-6 p-0">
              {searchResults.map((movie) => (
                <li
                  key={movie.id}
                  className="flex gap-6 border-b border-(--border) pb-6"
                >
                  <Link
                    to="/movies/$movieId"
                    params={{ movieId: String(movie.id) }}
                    className="w-32 shrink-0"
                  >
                    <img
                      src={movie.posterPath}
                      alt={`${movie.title} 포스터`}
                      className="aspect-[2/3] w-full rounded-lg object-cover"
                    />
                  </Link>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-(--text-h)">
                      <Link
                        to="/movies/$movieId"
                        params={{ movieId: String(movie.id) }}
                      >
                        {movie.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm">{movie.originalTitle}</p>
                    <p className="mt-1 text-xs">{movie.releaseDate}</p>
                    <p className="mt-3 text-sm leading-relaxed">
                      {movie.overview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  );
}
