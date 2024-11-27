import { renderHook } from '@testing-library/react-hooks';
import useCategories from '../useCategories';

describe('useCategories', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useCategories([], true, null));
    expect(result.current.currentCategories).toEqual([]);
    expect(result.current.breadcrumbItems).toEqual([]);
  });

  it('should set categories when loading is false and no error', () => {
    const categories = ['Electronics', 'Books'];
    const { result } = renderHook(() => useCategories(categories, false, null));
    expect(result.current.currentCategories).toEqual(categories);
    expect(result.current.breadcrumbItems).toEqual([
      { label: 'Electronics', href: '/items?search=Electronics' },
      { label: 'Books', href: '/items?search=Books' },
    ]);
  });

  it('should not set categories when loading is true', () => {
    const categories = ['Electronics', 'Books'];
    const { result } = renderHook(() => useCategories(categories, true, null));
    expect(result.current.currentCategories).toEqual([]);
    expect(result.current.breadcrumbItems).toEqual([]);
  });

  it('should not set categories when there is an error', () => {
    const categories = ['Electronics', 'Books'];
    const { result } = renderHook(() =>
      useCategories(categories, false, 'Error')
    );
    expect(result.current.currentCategories).toEqual([]);
    expect(result.current.breadcrumbItems).toEqual([]);
  });
});
