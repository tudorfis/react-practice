import React, { createContext, useReducer } from 'react'
import AddTodo from './todos/AddTodo'
import TodoList from './todos/TodoList'
import { reducer, STATE } from './reducer'

export const ReducerContext = createContext()

export default function AppTodos() {
    const [state, dispatch] = useReducer(reducer, STATE)

    return (
        <ReducerContext.Provider value={{ state, dispatch }}>
            <AddTodo />
            <TodoList />
        </ReducerContext.Provider>
    )
}
