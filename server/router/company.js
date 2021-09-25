const express = require("express");
const router = express.Router();
const { Company } = require("../mongoose/model");

// 회사 추가
router.post("/company/create", async (req, res) => {
  const { name } = req.body;
  const newCompany = await Company({
    name,
  }).save();

  res.send(newCompany._id ? true : false);
});

// 개별 게시글 가져오는 라우트

module.exports = router;
