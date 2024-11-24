import React from "react";

const Pagination = ({ pagination, onPageChange }) => (
  <div>
    <button
      disabled={pagination.page === 1}
      onClick={() => onPageChange(pagination.page - 1)}
    >
      Anterior
    </button>
    <span>
      Pagina {pagination.page} de {pagination.totalPages}
    </span>
    <button
      disabled={pagination.page === pagination.totalPages}
      onClick={() => onPageChange(pagination.page + 1)}
    >
      Siguiente
    </button>
  </div>
);

export default Pagination;
