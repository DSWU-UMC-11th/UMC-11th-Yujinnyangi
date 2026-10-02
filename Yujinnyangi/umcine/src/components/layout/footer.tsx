export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] items-center gap-2 border-t border-(--border) px-10 pb-6 pt-4 text-xs text-(--text)">
      <img src="/images/logos/tmdb-logo.svg" alt="TMDB" className="h-3.5" />
      <span>
        This product uses the TMDB API but is not endorsed or certified by
        TMDB.
      </span>
    </footer>
  );
}
