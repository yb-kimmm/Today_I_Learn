const mongoose = require("mongoose");
const Article = new mongoose.Schema({
  // author : {type : mongoose.Schema.Types.ObjectId, ref : "Author"},
  content: { type: String, default: "", require: true }, // 게시글 본문
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Article;
