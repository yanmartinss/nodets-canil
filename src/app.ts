import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes";

dotenv.config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());
app.use(express.static(path.join(__dirname, "../public")));

// Rotas
app.use(mainRoutes);
app.use((req, res) => {
  res.render("pages/404");
});

app.listen(process.env.PORT, () => {
  console.log("server at running in http://localhost:4000");
});
