import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Rentalx start" });
});

app.use("/categories", categoriesRoutes);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
