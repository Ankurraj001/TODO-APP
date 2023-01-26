import React, { useEffect } from "react";
import { Card, Typography, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  modifyTodo,
  deleteTodo,
  editTodo,
  addTodo,
  getTodos,
  addNewTodo,
} from "../store/todoSlice";
import { newTodoItem } from "./MockData";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";

const Todo = () => {
  const { todoData: todos, todoAdded } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [todoAdded]);

  const handleTextChange = (event, index) => {
    dispatch(modifyTodo({ value: event.target.value, index: index }));
  };

  const handleEdit = (index) => {
    dispatch(editTodo(index));
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleAdd = () => {
    // let newTodo = [...todos, { ...newTodoItem, id: todos.length + 1 }];
    dispatch(
      addNewTodo({
        id: todos.length + 1,
        value: "Enter here",
        disabled: true,
        showFlag: true,
      })
    );
  };

  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: "20px" }}>
        Todo APP
      </Typography>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {todos.map((item, index) => {
          if (!item.showFlag) {
            return null;
          }
          return (
            <Card
              key={index}
              sx={{
                margin: "20px",
                padding: "10px",
                backgroundColor: "#f0efd7",
                width: "500px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  variant="standard"
                  value={item?.value}
                  multiline
                  maxRows={10}
                  placeholder="Enter Text"
                  sx={{ width: "420px" }}
                  disabled={item?.disabled}
                  onChange={(event) => handleTextChange(event, index)}
                />
                <div>
                  <FiEdit
                    color="green"
                    style={{ marginRight: "10px", cursor: "pointer" }}
                    onClick={() => handleEdit(index)}
                  />
                  <RiDeleteBin6Fill
                    color="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div>
        <IoIosAddCircle
          size="30px"
          color="green"
          style={{ cursor: "pointer" }}
          onClick={handleAdd}
        />
      </div>
    </div>
  );
};

export default Todo;
