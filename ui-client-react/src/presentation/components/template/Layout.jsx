import React, { Suspense } from 'react';
import SkeletonLoader from '../atoms/skeleton-loader/SkeletonLoader';
import SearchBar from '../molecules/searchBar/SearchBar';

const HeaderNav =
  process.env.NODE_ENV === 'development'
    ? React.lazy(() => import('remote/HeaderNav'))
    : null;

const Layout = ({ children }) => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className="layout">
      <header className="layout__header">
        <Suspense fallback={<SkeletonLoader height="80px" width="100%" />}>
          {HeaderNav ? <HeaderNav /> : <div>Loading Header...</div>}
        </Suspense>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
