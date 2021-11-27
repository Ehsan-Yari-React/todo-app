import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  id: string;
  text: string;
  completed: boolean;
}

const initialState: TodosState[] = JSON.parse(
  localStorage.getItem("todos") || "[]"
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
    addTodo: (state, action: PayloadAction<TodosState>) => {
      return [...state, action.payload];
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },

  },
});

export const { deleteTodo, addTodo, completeTodo, } = todosSlice.actions;
export default todosSlice.reducer;
