import {createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { createSelector } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}


interface TodosState {
    todos: Todo[] | null
}


const initialState: TodosState = {
    todos: null
}




const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getInitTodos(state, action: PayloadAction<Todo[]>) {
            state.todos = action.payload
        },
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos?.push(action.payload)
        },
        deleteTodo(state, action: PayloadAction<number>) {
            if(state.todos === null) return
            state.todos = state.todos?.filter(todo => todo.id !== action.payload)
        },
        editTodo(state,action: PayloadAction<Todo>) {
            if(state.todos === null) return
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index] = action.payload
        }

    }
})



//create a selector that will return the todo state from the id of the todo
export const selectTodoById = (state: Todo[], todoId: number) => {
    if(state === null) return
    return state?.find(todo => todo.id === todoId)
}


export const reducer =  todoSlice.reducer


export const getInitTodos = (data: Todo[] ) => async (dispatch: any) => {
    try {
        
        dispatch(todoSlice.actions.getInitTodos(data))
    } catch (error) {
        console.log(error)
    }
}

export const addTodo = (data: Todo) => async (dispatch: any) => {
    try {
        dispatch(todoSlice.actions.addTodo(data))
    } catch (error) {
        console.log(error)
    }
}


export const deleteTodo = (id: number) => async (dispatch: any) => {
    try {
        dispatch(todoSlice.actions.deleteTodo(id))
    } catch (error) {
        console.log(error)
    }
}

export const editTodo = (data: Todo) => async (dispatch: any) => {
    try {
        dispatch(todoSlice.actions.editTodo(data))
    } catch (error) {
        console.log(error)
    }
}


