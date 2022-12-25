import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],


    reducers: {
        addTaks: (state, action) =>{
            // { type: ADD_TASK, payload: "faire les couse"}
            const newTaks = {
                id: new Date(), 
                task: action.payload, 
                ok: false
            }
            state.push(newTaks)
        },

        deleteTaks: (state, action) =>{
            // { type: DELETE_TASK, payload: id }
            state = state.filter(el => el.id !== action.payload ) 
        }
    }
});

export const { addTaks, deleteTaks } = todoSlice.actions

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer
    }
})

