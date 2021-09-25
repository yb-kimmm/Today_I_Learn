const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Company = new Schema({
  title: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, required: true },
  reviewScore: { type: Number, default: 3, required: true },
  imgAddress: { type: String, default: null },
  realtimeSecore: { type: Number, default: 0 },
});

module.export = Company;
