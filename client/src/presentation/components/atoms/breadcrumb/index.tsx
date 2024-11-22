import React from 'react';
import './Breadcrumb.scss';
import { BreadcrumbProps } from './Breadcrumb.type';

const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb">
      {props.items.map((item, index) => (
        <React.Fragment key={index}>
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
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
