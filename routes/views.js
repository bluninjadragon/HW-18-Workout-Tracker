const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  //Question: review with tutor the exact syntax and meaning of the below view syntax (copied from folder 7 server.js in lesson 18)
  res.sendFile(path.join(__dirname + "./../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "./../public/stats.html"));
});

module.exports = router;
