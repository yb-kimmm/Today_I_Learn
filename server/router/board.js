const express = require("express");
const router = express.Router();
const { Article, Comment, Board } = require("../mongoose/model");

//  게시판별 게시글 가져오는 라우트
router.get("/board/:slug", async (req, res) => {
  const { slug } = req.params;
  //const { lastIndex } = req.query; 페이징(무한스크롤)

  const board = await Board.findOne({ slug });
  if (!board._id) {
    return res.send({
      article: [],
      error: true,
      msg: "존재하지 않는 게시판",
    });
  }
  const article = await Article.find({ board: board._id });
  res.send({ article, error: false, msg: "성공" });
});

// 관리자 기능 : 게시판 추가
router.post("/board/create", async (req, res) => {
  const { title, slug } = req.body;
  const newBoard = await Board({
    title,
    slug,
  }).save();

  res.send(newBoard._id ? true : false);
});

module.exports = router;
