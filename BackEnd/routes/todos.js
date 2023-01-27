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
    id: req.body.id,
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

router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ id: req.params.id });
    res.send("Deleted successfully");
  } catch {
    res.send("Delete Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updateDoc = {
      $set: {
        value: req.body.value,
      },
    };
    const options = { upsert: false };
    await Todo.updateOne({ id: req.params.id }, updateDoc, options);
    res.send("Data Updated successfully");
  } catch {
    res.send("Update Error");
  }
});

module.exports = router;
