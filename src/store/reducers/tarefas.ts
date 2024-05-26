import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})
