// 사용 X

const mongoose = require("mongoose");
const Author = new mongoose.Schema({
  nickname: { type: String, default: "", require: true, unique: true }, // 게시글
  hashPassword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Author;
