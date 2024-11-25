import express from "express";
import axiosInstance from "../../utils/axiosInstance.js";
import { asyncWrapper } from "../../middleware/asyncWrapper.js";
import { mapItemDetails } from "../../utils/mapItemDetails.js";

const getItemById = express.Router();

getItemById.get(
  "/items/:id",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;

    const [itemResponse, descriptionResponse] = await Promise.all([
      axiosInstance.get(`/items/${id}`),
      axiosInstance.get(`/items/${id}/description`),
    ]);

    const item = mapItemDetails(itemResponse.data, descriptionResponse.data);

    res.json({
      author: {
        name: "Daniela",
        lastname: "Vargas",
      },
      item,
    });
  }),
);

export default getItemById;
