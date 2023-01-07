const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/todos", (req, res) => {
  res.send([
    {
      id: 1,
      value: "Get early123",
      disabled: true,
      showFlag: true,
    },
    {
      id: 2,
      value: "Get early 2",
      disabled: true,
      showFlag: true,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
