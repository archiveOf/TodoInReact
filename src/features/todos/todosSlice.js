import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Tianna Jenkins' },
    { id: '1', name: 'Kevin Grant' },
    { id: '2', name: 'Madison Price' }
]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, category, limit, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        category,
                        limit,
                        user: userId
                    }
                }
            }
        },
    }
})

export const { todoAdded } = todosSlice.actions

export const selectAllTodos = state => state.todos

export default todosSlice.reducer