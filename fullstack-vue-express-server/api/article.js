const { Article } = require("../mongoose/model");

// CREATE
const articleCreate = async (req, res) => {
  const { content } = req.body;
  const newArticle = await Article({ content });
  const saveRequest = await newArticle.save();

  console.log("created article", saveRequest);
  res.send(saveRequest);
};

//Read
const articleRead = async (req, res) => {
  const articles = await Article.find({});
  res.send(articles);
};

//articleFindOne
const articleFindOne = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const articles = await Article.findById(id);
  res.send(articles);
};

//Update
const articleUpdate = async (req, res) => {
  const { id, content } = req.body;
  const updatedArticle = await Article.findByIdAndUpdate(id, { content });
  res.send(updatedArticle);
};

//Delete
const articleDelete = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const deleteArticle = await Article.findByIdAndDelete(id);
  res.send(deleteArticle);
};

module.exports = {
  articleCreate,
  articleRead,
  articleUpdate,
  articleDelete,
  articleFindOne,
};
