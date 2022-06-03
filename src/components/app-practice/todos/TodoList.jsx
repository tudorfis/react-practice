import React, { useContext } from 'react'
import { ReducerContext } from '../AppTodos'
import Todo from './Todo'

export default function TodoList() {
    const { state } = useContext(ReducerContext)

    return (
        <section>
            {state.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </section>
    )
}
