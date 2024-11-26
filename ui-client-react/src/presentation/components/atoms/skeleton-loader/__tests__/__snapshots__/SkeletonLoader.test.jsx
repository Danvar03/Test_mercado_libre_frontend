import React from 'react';
import { render } from '@testing-library/react';
import SkeletonLoader from '../../SkeletonLoader';


const renderSkeletonLoader = (props = {}) => {
  return render(<SkeletonLoader {...props} />);
};

describe('SkeletonLoader', () => {
  it('renders without crashing', () => {
    const { container } = renderSkeletonLoader({ height: '100px', width: '100px' });
    expect(container.firstChild).toHaveClass('skeleton-loader');
  });

  it('applies the correct height and width styles', () => {
    const { container } = renderSkeletonLoader({ height: '100px', width: '100px' });
    expect(container.firstChild).toHaveStyle('height: 100px');
    expect(container.firstChild).toHaveStyle('width: 100px');
  });

});
