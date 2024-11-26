import React from 'react';
import './Pagination.scss';
import ButtonPrimary from '../../atoms/button/ButtonPrimary';
import TypographyText from '../../atoms/text/TypographyText';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Pagination = ({ pagination, onPageChange }) => (
  <div className="pagination">
    <ButtonPrimary
      className="pagination__button"
      disabled={pagination.page === 1}
      onClick={() => onPageChange(pagination.page - 1)}
    >
      <ChevronLeft />
    </ButtonPrimary>
    <TypographyText className="pagination__info">
      Página {pagination.page} de {pagination.totalPages}
    </TypographyText>
    <ButtonPrimary
      className="pagination__button"
      disabled={pagination.page === pagination.totalPages}
      onClick={() => onPageChange(pagination.page + 1)}
    >
      <ChevronRight />
    </ButtonPrimary>
  </div>
);

export default Pagination;
