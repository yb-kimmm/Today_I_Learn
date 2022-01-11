const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/upload/file", upload.single("file"), function (req, res, next) {
  // req.body는 텍스트 필드를 포함합니다.
  console.log(req.file);
});

module.exports = router;
