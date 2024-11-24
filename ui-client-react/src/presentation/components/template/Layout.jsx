import React, { Suspense } from 'react';
import SkeletonLoader from '../atoms/skeleton-loader/SkeletonLoader';

const HeaderNav =
  process.env.NODE_ENV === 'development'
    ? React.lazy(() => import('remote/HeaderNav'))
    : null;

const Layout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<SkeletonLoader height="80px" width="100%" />}>
        {HeaderNav ? <HeaderNav /> : <div>Loading Header...</div>}
      </Suspense>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
