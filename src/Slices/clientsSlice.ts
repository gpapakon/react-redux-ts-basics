import {createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import _ from 'lodash';


export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ClientsState {
  clients: Client[] | null
}

const initialState: ClientsState = {
  clients: null
}

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    getClients(state, action: PayloadAction<Client[]>) {
      state.clients = action.payload
    }
      // editTodo(state,action: PayloadAction<Todo>) {
      //     if(state.todos === null) return
      //     const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      //     state.todos[index] = action.payload
      // }

  }
})


export const reducer =  clientsSlice.reducer

export const getClients = (data: Client[] ) => async (dispatch: any) => {
  try {
      dispatch(clientsSlice.actions.getClients(data))
  } catch (error) {
      console.log(error)
  }
}



export const searchClients = (user_search: string) => (state: RootState) => {
  console.log(user_search);
  console.log(state);

  if( !user_search ){
    return state.clients.clients;
  }else{
   
    return  _.filter(state.clients.clients, function(client) { 
      return client.name.toLowerCase().includes(user_search.toLowerCase())
      || client.email.toLowerCase().includes(user_search.toLowerCase())
      || client.phone.toLowerCase().includes(user_search.toLowerCase()); 
    });
  }
};







