import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
};
const url = "http://localhost:4000/todos";
export const getTodos = createAsyncThunk("todo/getTodos", async (thunkAPI) => {
  const res = await fetch(url).then((data) => data.json());
  return res;
});

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
  extraReducers: {
    // [getTodos.pending]: (state) => {
    //   state.loading = true
    // },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.todoData = payload;
    },
    [getTodos.rejected]: (state) => {
      console.log("first Error");
    },
  },
});

// Action creators are generated for each case reducer function
export const { modifyTodo, deleteTodo, editTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
