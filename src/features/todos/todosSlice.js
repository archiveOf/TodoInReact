import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', status: false, title: 'Tianna Jenkins' },
    { id: '1', status: false, title: 'Kevin Grant' },
    { id: '2', status: false, title: 'Madison Price' }
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
        todoDeleted(state, action) {
            return state.filter( todo => todo.id !== action.payload.id)
        },
        todoStatusUpdated(state, action) {
            let todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.status = !todo.status 
            }
            
        }
    }
})

export const { todoAdded, todoDeleted, todoStatusUpdated } = todosSlice.actions

export const selectAllTodos = state => state.todos
export const selectCompletedTodos = state => state.todos.filter( todo => todo.status === true)
export const selectInProgressTodos = state => state.todos.filter( todo => todo.status === false)

export default todosSlice.reducer