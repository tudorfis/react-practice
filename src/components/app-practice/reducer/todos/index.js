
const STATE = {
    todos: []
}

const ACTIONS = {
    'ADD_TODO': (state, action) => {
        return {
            ...state,
            todos: [...state.todos, newTodo(action.payload.todo)]
        }
    },
    'TOGGLE_TODO': (state, action) => {
        return {
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }

                return todo
            })
        }
    },
    'DELETE_TODO': (state, action) => {
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
}


function newTodo(todo) {
    return {
        id: Math.random().toString(36).substr(2, 9),
        completed: false,
        ...todo
    }
}

export default { STATE, ACTIONS }