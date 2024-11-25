import { mapItem } from "../utils/mapItem.js";

export const mapItemDetails = (itemData, descriptionData) => ({
  ...mapItem(itemData),
  sold_quantity: itemData.sold_quantity,
  description: descriptionData.plain_text,
});
