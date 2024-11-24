import { mapItem } from "../utils/mapItem.js";
import { extractCategories } from "../utils/extractCategories.js";

export const getPaginetedItems = (data, page = 1, pageSize = 4) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const items = data.results.slice(startIndex, endIndex).map(mapItem) || [];

  const categories = extractCategories(data.filters);
  return { categories, items };
};
