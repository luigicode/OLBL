const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.render("people", { people }).catch(err => console.log(err))
);
