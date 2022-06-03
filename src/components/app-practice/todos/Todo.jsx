import React, { useContext } from 'react'
import { ReducerContext } from '../AppTodos'

export default function Todo({ todo }) {
    const { dispatch } = useContext(ReducerContext)

    return (
        <div className="m20_0">
            <div>
                <strong>Name: </strong>
                <span>{todo.name}</span>
            </div>
            <div>
                <strong>Completed: </strong>
                <span>{todo.completed ? 'TRUE' : 'FALSE'}</span>
            </div>
            <button onClick={() => dispatch({ action: 'TOGGLE_TODO', payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ action: 'DELETE_TODO', payload: { id: todo.id } })}>Delete</button>
        </div>
    )
}
