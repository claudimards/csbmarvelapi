type PaginationItemType = {
  page: number;
  limit: number;
  isCurrent?: boolean;
  isLastPage?: boolean;
  onPageChange: (page: number) => void;
  handleOffset: (offset: number) => void;
}

export function PaginationItem({ isCurrent = false, page, onPageChange, handleOffset, limit, isLastPage = false }: PaginationItemType) {
  const handlePageChange = () => {
    onPageChange(page)
    
    if (isLastPage) {
      handleOffset((page - 1) * limit)
      return
    }
    
    if (page === 1) {
      handleOffset(0)
      return
    }

    handleOffset(page * limit)
  }
  if(isCurrent) {
    return (
      <button
        disabled
      >
        {page}
      </button>
    )
  }

  return (
    <button
      onClick={() => handlePageChange()}
    >
      {page}
    </button>
  )
}