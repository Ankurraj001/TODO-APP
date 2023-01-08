const express = require("express");
const router = express.Router();
const Todo = require("../modals/todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch {
    res.send("Error", err);
  }
});

router.post("/", async (req, res) => {
  const todos = new Todo({
    id: req.body.ids,
    value: req.body.value,
    disabled: req.body.disabled,
    showFlag: req.body.showFlag,
  });
  try {
    const data = await todos.save();
    res.json(data);
  } catch {
    res.send("Error");
  }
});

module.exports = router;
