const router = require("express").Router();

const Users = require("./userModel");

router.get("/", (req, res) => {
  res.status(200).json({ api: "user router running..." });
});

module.exports = router;
