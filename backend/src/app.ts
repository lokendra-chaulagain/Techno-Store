import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

import bannerRoutes from "./routes/banner.routes";
import categoryRoutes from "./routes/category.routes";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json("Getting Response From Server");
});

app.use("/api/banner", bannerRoutes);
app.use("/api/category", categoryRoutes);

export default app;
