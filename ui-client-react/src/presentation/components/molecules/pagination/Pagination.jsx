import React from 'react';
import './Pagination.scss';

const Pagination = ({ pagination, onPageChange }) => (
  <div className="pagination">
    <button
      className="pagination__button"
      disabled={pagination.page === 1}
      onClick={() => onPageChange(pagination.page - 1)}
    >
      {'<'}
    </button>
    <span className="pagination__info">
      Página {pagination.page} de {pagination.totalPages}
    </span>
    <button
      className="pagination__button"
      disabled={pagination.page === pagination.totalPages}
      onClick={() => onPageChange(pagination.page + 1)}
    >
      {'>'}
    </button>
  </div>
);

export default Pagination;
