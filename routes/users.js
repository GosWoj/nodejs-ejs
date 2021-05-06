import express from "express";

export const router = express.Router();

export const names = [];

router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users page",
    names: names,
    hasNames: names.length > 0,
  });
});

router.post("/users", (req, res, next) => {
  names.push({ name: req.body.name });
  res.redirect("/users");
});
