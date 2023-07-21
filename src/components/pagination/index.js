// Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 5;
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  let startPage = Math.max(currentPage - halfPagesToShow, 1);
  let endPage = Math.min(currentPage + halfPagesToShow, totalPages);

  if (endPage - startPage + 1 < pagesToShow) {
    if (currentPage <= halfPagesToShow) {
      endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    } else {
      startPage = Math.max(endPage - pagesToShow + 1, 1);
    }
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="pagination_btn">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Назад
      </button>
      <div className="pagination_num">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "active_num" : ""}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Далее
      </button>
    </div>
  );
};

export default Pagination;
