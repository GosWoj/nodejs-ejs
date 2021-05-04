import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router as homeRoute } from "./routes/home.js";
import { router as usersRoute } from "./routes/users.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const __direname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__direname, "public")));

app.use(usersRoute);
app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
