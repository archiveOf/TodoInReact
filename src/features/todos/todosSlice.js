import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', title: 'Tianna Jenkins' },
    { id: '1', title: 'Kevin Grant' },
    { id: '2', title: 'Madison Price' }
]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({title, category, limit, status=false}) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        category,
                        limit,
                        status
                    }
                }
            }
        },
    }
})

export const { todoAdded } = todosSlice.actions

export const selectAllTodos = state => state.todos

export default todosSlice.reducer