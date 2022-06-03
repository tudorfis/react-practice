import React, { useContext, useState } from 'react'
import { ReducerContext } from '../AppTodos'

export default function AddTodo() {
    const initialTodo = { name: '' }

    const { dispatch } = useContext(ReducerContext)
    const [todo, setTodo] = useState({ ...initialTodo })

    return (
        <div>
            <input
                value={todo.name}
                placeholder="Enter todo name..."
                onChange={e => setTodo({ ...todo, name: e.target.value })}
            />
            <button onClick={() => {
                dispatch({ action: 'ADD_TODO', payload: { todo } })
                setTodo({ ...initialTodo })
            }}>Add todo</button>
        </div>

    )
}
