const express = require("express");
const { Article } = require("./api");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Sucesses");
});

app.post("/create", Article.articleCreate);
app.patch("/update", Article.articleUpdate);
app.delete("/delete/:id", Article.articleDelete);
app.get("/read", Article.articleRead);
app.get("/read/:id", Article.articleFindOne);

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
