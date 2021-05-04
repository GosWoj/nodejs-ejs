import express from "express";

export const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", { pageTitle: "Home Page" });
});
