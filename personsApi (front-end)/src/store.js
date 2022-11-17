import { configureStore } from '@reduxjs/toolkit'
import { personListReducer } from './reducers/personListReducer'

export const store = configureStore({
  reducer: {
    personList: personListReducer
  }
})
