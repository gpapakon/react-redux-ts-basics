import { combineReducers } from '@reduxjs/toolkit'
import { reducer as todosReducer } from '../Slices/todoSlice';
import { reducer as clientsReducer } from '../Slices/clientsSlice';

export const rootReducer = combineReducers({
    todos: todosReducer,
    clients : clientsReducer
});