import React, { Suspense } from 'react';
import SkeletonLoader from '../atoms/skeleton-loader/SkeletonLoader';
import SearchBar from '../molecules/searchBar/SearchBar';


const HeaderNav =
  process.env.NODE_ENV === 'development'
    ? React.lazy(() => import('remote/HeaderNav'))
    : null;


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-left">
          <Suspense fallback={<SkeletonLoader height="80px" width="100%" />}>
            <HeaderNav />
          </Suspense>
        </div>
        <div className="layout__header-center">
          <SearchBar />
        </div>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
