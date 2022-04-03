import { PaginationItem } from "../PaginationItem";

type PaginatorType = {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
  handleOffset: (offset: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export const Paginator = ({currentPage, total, limit, onPageChange, handleOffset}: PaginatorType) => {
  const pageStart = (currentPage * limit) - limit + 1
  const pageEnd = currentPage * limit;
  const lastPage = Math.ceil(total / limit)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <div className="pagination">
      {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} limit={limit} handleOffset={handleOffset} page={1} />
            { currentPage > (2 + siblingsCount) && (
              <span>...</span>
            ) }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} limit={limit} handleOffset={handleOffset} key={page} page={page} isLastPage={currentPage + 2 > lastPage} />
        ))}

        <PaginationItem onPageChange={onPageChange} limit={limit} handleOffset={handleOffset} page={currentPage} isCurrent isLastPage={currentPage + 2 > lastPage} />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} limit={limit} handleOffset={handleOffset} key={page} page={page} isLastPage={currentPage + 2 > lastPage} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <span>...</span>
            ) }
            <PaginationItem onPageChange={onPageChange} limit={limit} handleOffset={handleOffset} page={lastPage} isLastPage />
          </>
        )}
    </div>
  )
}