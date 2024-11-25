import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category, index) => {
    setSelectedItem(index);
    navigate(`/items?search=${encodeURIComponent(category)}`);
  };

  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <div
          key={index}
          className={`breadcrumb__item ${
            selectedItem === index ? 'breadcrumb__item--active' : ''
          }`}
        >
          {item.href ? (
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick(item.label, index);
              }}
              className={`breadcrumb__link ${
                selectedItem === index ? 'breadcrumb__link--active' : ''
              }`}
            >
              {item.label}
            </a>
          ) : (
            <span className="breadcrumb__text">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="breadcrumb__separator">{'>'}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
