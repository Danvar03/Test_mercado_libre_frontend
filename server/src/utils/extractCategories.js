export const extractCategories = (filters) => {
  const categoryFilter = filters.find((filter) => filter.id === "category");
  return categoryFilter?.values[0]?.path_from_root.map((cat) => cat.name) || [];
};
