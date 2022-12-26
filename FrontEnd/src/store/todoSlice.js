import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoData: [
    {
      id: 1,
      value: "Get early",
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
    addTodo: (state) => {
      state.value += 1;
    },
    deleteTodo: (state) => {
      state.value -= 1;
    },
    modifyTodo: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoSlice.actions;

export default todoSlice.reducer;
