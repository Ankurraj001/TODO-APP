const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;

app.use(cors());
mongoose.connect("mongodb://localhost:27017/collectionName", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.set("strictQuery", false);
const con = mongoose.connection;
con.on("open", function () {
  console.log("Connected.. ");
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const todoRouter = require("./routes/todos");
app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
