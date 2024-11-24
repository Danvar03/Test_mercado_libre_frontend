import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import '../styles/layout.scss';

const Layout = ({ children }) => {

  return (
    <div className="container">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
