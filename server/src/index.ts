import express, { Router } from "express";
import { registerRoutes } from "./routes";

const PORT = process.env.PORT || 9001;

const app = express();
const router = Router();
app.use(router);
registerRoutes(router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});