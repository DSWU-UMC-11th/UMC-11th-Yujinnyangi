import { Link } from "@tanstack/react-router";
import { cn } from "../../utils/cn";

const navLinkClass = "text-sm text-(--text) no-underline";
const activeNavLinkClass = "font-semibold text-(--text-h)";

export function Header() {
  return (
    <header className="border-b border-(--border) bg-(--bg)">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-10">
        <Link to="/" className="mr-2 flex items-center gap-2 no-underline">
          <img
            src="/icons/movie.svg"
            alt=""
            className="h-6 w-6 rounded-md bg-(--text-h) p-1 invert"
          />
          <span className="text-lg font-bold text-(--text-h)">UMCine</span>
        </Link>
        <nav className="flex flex-1 gap-6">
          <Link
            to="/"
            className={navLinkClass}
            activeOptions={{ exact: true }}
            activeProps={{ className: cn(navLinkClass, activeNavLinkClass) }}
          >
            영화
          </Link>
          <Link
            to="/search"
            className={navLinkClass}
            activeProps={{ className: cn(navLinkClass, activeNavLinkClass) }}
          >
            검색
          </Link>
          <a href="#" className={navLinkClass}>
            내정보
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/search"
            aria-label="검색"
            className="inline-flex h-8 w-8 items-center justify-center"
          >
            <img src="/icons/search.svg" alt="" className="h-[18px] w-[18px]" />
          </Link>
          <button
            type="button"
            className="cursor-pointer rounded-md border-none bg-[#2f6feb] px-4 py-2 text-sm font-semibold text-white"
          >
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
