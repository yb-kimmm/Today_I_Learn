const express = require("express");
const router = express.Router();
const { Article, Comment } = require("../mongoose/model");

router.get("/article/:id", async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  const comment = await Comment.find({ article: id });
  res.send({ article, comment });
});

// 개별 게시글 가져오는 라우트

module.exports = router;
