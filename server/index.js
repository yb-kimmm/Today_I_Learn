const express = require("express");
const cors = require("cors");
const { article } = require("./router");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 기능
app.use(article);

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
