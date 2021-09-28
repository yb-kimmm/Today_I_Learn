const express = require("express");
const cors = require("cors");
const { article, user, company, board, comment, reply } = require("./router");
const app = express();
const PORT = 3000;
const SECRET = "@askdasklF!@#123dnasdnkas";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JWT 시크릿 할당
app.set("jwt-secret", SECRET);

// 기능
app.use(article);
app.use(company);
app.use(board);
app.use(user);
app.use(comment);
app.use(reply);

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
