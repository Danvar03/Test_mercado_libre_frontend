import React from 'react';
import '../skeleton-loader/SkeletonLoader.scss';

const SkeletonLoader = ({ height, width }) => {
  return <div className="skeleton-loader" style={{ height, width }} />;
};
export default SkeletonLoader;
