import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = []

const add = createAction('@PERSON-LIST/add')
const set = createAction('@PERSON-LIST/set')

const personListReducer = createReducer(initialState, builder => {
  builder
    .addCase(add, (state, action) => [...state, action.payload])
    .addCase(set, (state, action) => action.payload)
})

const addPerson = payload => {
  return {
    type: '@PERSON-LIST/add',
    payload
  }
}

const setPersonList = payload => {
  return {
    type: '@PERSON-LIST/set',
    payload
  }
}

export { personListReducer, addPerson, setPersonList }
