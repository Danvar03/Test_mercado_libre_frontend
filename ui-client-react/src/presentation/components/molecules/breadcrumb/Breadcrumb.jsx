import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = ({ items, showBackButton }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedCategory = new URLSearchParams(location.search).get('search');

  const handleCategoryClick = (category) => {
    navigate(`/items?search=${encodeURIComponent(category)}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <nav className="breadcrumb">
      {items.length > 0
        ? items.map((item, index) => (
            <div
              key={index}
              className={`breadcrumb__item ${
                selectedCategory === item.label ||
                (index === 0 && !selectedCategory)
                  ? 'breadcrumb__item--active'
                  : ''
              }`}
            >
              {item.href ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(item.label);
                  }}
                  className={`breadcrumb__link ${
                    selectedCategory === item.label ||
                    (index === 0 && !selectedCategory)
                      ? 'breadcrumb__link--active'
                      : ''
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`breadcrumb__text ${
                    index === 0 && !selectedCategory
                      ? 'breadcrumb__text--active'
                      : ''
                  }`}
                >
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="breadcrumb__separator">{'>'}</span>
              )}
            </div>
          ))
        : showBackButton && (
            <div className="breadcrumb__back">
              <button
                onClick={handleBackClick}
                className="breadcrumb__back-button"
              >
                Volver
              </button>
            </div>
          )}
    </nav>
  );
};

export default Breadcrumb;
