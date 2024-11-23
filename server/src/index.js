import express from "express";
import cors from "cors";
import getItems from "./api/v1/getItems.js";
import { errorHandler } from "./middleware/errorHandler.js";
import getItemById from "./api/v1/getItemById.js";
import getItemDescription from "./api/v1/getItemDescription.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", getItems);
app.use("/api/v1", getItemById);
app.use("/api/v1", getItemDescription); // Registra el nuevo endpoint

app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
