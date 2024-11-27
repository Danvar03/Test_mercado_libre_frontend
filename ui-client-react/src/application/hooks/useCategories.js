import { useState, useEffect } from 'react';

const useCategories = (categories, loading, error) => {
  const [currentCategories, setCurrentCategories] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setCurrentCategories(categories);
    }
  }, [categories, loading, error]);

  const breadcrumbItems = currentCategories.map((category) => ({
    label: category,
    href: `/items?search=${encodeURIComponent(category)}`,
  }));

  return { currentCategories, breadcrumbItems };
};

export default useCategories;
