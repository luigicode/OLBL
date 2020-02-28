const express = require("express");
const router = express.Router();

// Index route
app.get("/", (req, res) => res.render("index"));

app.use("/people", require("./routes/people"));

module.exports = router;
