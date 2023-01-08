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

// const todoSchema = {
//   id: Number,
//   value: String,
//   disabled: Boolean,
//   showFlag: Boolean,
// };

// const todos = mongoose.model("todos", todoSchema);

// app.get("/todos", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       value: "Get early123",
//       disabled: true,
//       showFlag: true,
//     },
//     {
//       id: 2,
//       value: "Get early 2",
//       disabled: true,
//       showFlag: true,
//     },
//   ]);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
