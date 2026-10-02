import { cn } from "../../utils/cn";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const arrowClass =
    "flex h-7 w-7 cursor-pointer items-center justify-center border-none bg-transparent p-0 disabled:cursor-default disabled:opacity-30";

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="페이지 이동"
    >
      <button
        type="button"
        className={arrowClass}
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img
          src="/icons/chevron-left.svg"
          alt="이전 페이지"
          className="h-3.5 w-3.5"
        />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={cn(
            "h-7 w-7 cursor-pointer rounded-md border text-[13px]",
            page === currentPage
              ? "border-(--text-h) bg-(--text-h) text-(--bg)"
              : "border-(--border) bg-(--bg) text-(--text)",
          )}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={arrowClass}
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img
          src="/icons/chevron-right.svg"
          alt="다음 페이지"
          className="h-3.5 w-3.5"
        />
      </button>
    </nav>
  );
}
