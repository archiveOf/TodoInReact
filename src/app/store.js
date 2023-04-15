import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import categoriesReducer from "../features/SideBar/categoriesSlice";

export default configureStore({
    reducer: {
        todos: todosReducer,
        categories: categoriesReducer,
    }
})