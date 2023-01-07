import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoData: [
    {
      id: 1,
      value: "Get early0",
      disabled: true,
      showFlag: true,
    },
    {
      id: 2,
      value: "Get early 2",
      disabled: true,
      showFlag: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoData = action.payload;
    },
    deleteTodo: (state, action) => {
      const index = action.payload;
      state.todoData[index].showFlag = false;
    },
    editTodo: (state, action) => {
      const index = action.payload;
      state.todoData[index].disabled = false;
    },
    modifyTodo: (state, action) => {
      const index = action.payload.index;
      const value = action.payload.value;
      state.todoData[index].value = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modifyTodo, deleteTodo, editTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
