import express from "express";
import axiosInstance from "../../utils/axiosInstance.js";
import { asyncWrapper } from "../../middleware/asyncWrapper.js";

const getItemDescription = express.Router();

getItemDescription.get(
  "/items/:id/description",
  asyncWrapper(async (req, res) => {
    const { id } = req.params;

    const descriptionResponse = await axiosInstance.get(
      `/items/${id}/description`,
    );

    res.json({
      author: {
        name: "Daniela",
        lastname: "Vargas",
      },
      description: descriptionResponse.data.plain_text,
    });
  }),
);

export default getItemDescription;
