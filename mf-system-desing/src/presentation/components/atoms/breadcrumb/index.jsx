import React from 'react';
import './Breadcrumb.scss';
import { BreadcrumbProps } from './Breadcrumb.type';

const Breadcrumb = (props) => {
  return (
    <nav className="breadcrumb">
      {props.items.map((item, index) => (
        <div key={index}>
          {item.href ? (
            <a href={item.href} className="breadcrumb__link">
              {item.label}
            </a>
          ) : (
            <span className="breadcrumb__item">{item.label}</span>
          )}
          {index < props.items.length - 1 && (
            <span className="breadcrumb__separator">{'>'}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
