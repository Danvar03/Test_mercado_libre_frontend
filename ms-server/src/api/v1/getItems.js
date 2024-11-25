import express from "express";
import axiosInstance from "../../utils/axiosInstance.js";
import { getPaginetedItems } from "../../utils/getPaginetedItems.js";
import { asyncWrapper } from "../../middleware/asyncWrapper.js";

const getItems = express.Router();

getItems.get(
  "/items",
  asyncWrapper(async (req, res) => {
    const query = req.query.q;
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 4;

    const response = await axiosInstance.get(`/sites/MLA/search?q=${query}`);

    const { categories, items } = getPaginetedItems(
      response.data,
      page,
      pageSize,
    );

    res.json({
      author: {
        name: "Daniela",
        lastname: "Vargas",
      },
      categories,
      items,
      pagination: {
        page,
        pageSize,
        total: response.data.results.length,
        totalPages: Math.ceil(response.data.results.length / pageSize),
      },
    });
  }),
);

export default getItems;
