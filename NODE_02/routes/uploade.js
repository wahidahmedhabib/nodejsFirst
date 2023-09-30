import express from "express";
import multer from "multer";
import fs from "fs-extra"

const routes = express.Router();

// const upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

routes.post("/", upload.single("file"), (req, res) => {
  // var fs = require('fs-extra');

  fs.remove("images/Untitled.jpg", function (err) {
    if (err) return console.error(err);

    console.log("success!");
  });

  res.send({ message: "uploaded" });
});

export default routes;
