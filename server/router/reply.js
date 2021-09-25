const express = require("express");
const router = express.Router();
const { Reply } = require("../mongoose/model");

router.post("/reply/create", async (req, res) => {
  const { author, comment, content } = req.body;
  const newReply = await Reply({ author, comment, content }).save();
  res.send(newReply._id ? true : false);
});

// 대댓글 수정하기
router.patch("/reply/update", async (req, res) => {
  const { id, author, content } = req.body;
  const updatedReply = await Reply.findOneAndUpdate(
    {
      _id: id,
      author: author,
    },
    {
      content,
    },
    {
      new: true,
    }
  );
  res.send(updatedReply);
});

// 대댓글 완전 삭제하기
router.delete("/reply/delete/hard", async (req, res) => {
  const { id, author } = req.body;
  const deletedReply = await Reply.deleteOne({
    _id: id,
    author: author,
  });
  res.send(deletedReply);
});

// 대댓글 소프트 삭제하기 - 일반사용자는 보지 못하는 상태 ,  일정 기간이 지나면 삭제될 상태
router.delete("/reply/delete/soft", async (req, res) => {
  const { id, author } = req.body;
  const deletedReply = await Reply.findOneAndUpdate(
    {
      _id: id,
      author: author,
    },
    {
      deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30일 후의 시간이 저장
    }
  );
  res.send(deletedReply);
});

module.exports = router;
