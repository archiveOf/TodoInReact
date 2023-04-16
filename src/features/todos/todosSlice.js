import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', status: false, category: 'Дом', title: 'Приготовить вкусный ужин' },
    { id: '1', status: false, category: 'Дом', title: 'Устранить засор в раковине' },
    { id: '2', status: false, category: 'Дом', title: 'Стирка белого белья' },
    { id: '3', status: false, category: 'Дом', title: 'Разморозить холодильник' },
    { id: '4', status: true, category: 'Дом', title: 'Полить цветы' },
    { id: '5', status: true, category: 'Дом', title: 'Вызвать сантехника' },
    { id: '6', status: false, category: 'Семья', title: 'Накормить сына' },
    { id: '7', status: false, category: 'Семья', title: 'Съесть деда' },
    { id: '8', status: false, category: 'Работа', title: 'Доделать туду лист' },
    { id: '9', status: true, category: 'Спорт', title: 'Атжумания' },
    { id: '10', status: true, category: 'Спорт', title: 'Пресс качат' },
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
export const selectTodosByCategory = (state, category) => state.todos.filter( todo => todo.category === category)
export const selectCompletedTodos = state => state.todos.filter( todo => todo.status === true)
export const selectInProgressTodos = state => state.todos.filter( todo => todo.status === false)

export default todosSlice.reducer