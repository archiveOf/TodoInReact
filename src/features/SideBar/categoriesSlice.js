import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    { id: 0, title: 'Дом'},
    { id: 1, title: 'Семья'},
    { id: 2, title: 'Работа'},
    { id: 3, title: 'Спорт'},
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // categoryAdded: {
        //     reducer(state, action) {
        //         state.categories.push(action.payload)
        //     },
        //     prepare(title) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title
        //             }
        //         }
        //     }
        // },
        categoryAdded(state, action) {
            // const { title } = action.payload;
            state.push({id: nanoid(), title: action.payload.title})
        },
        categoryDeleted(state, action) {
            const { categoryId, title } = action.payload;
            return state.categories.find( category => category.id === categoryId);
        }
    }
})

export const { categoryAdded, categoryDeleted } = categoriesSlice.actions;

export default categoriesSlice.reducer

export const selectAllCategories = state => state.categories;