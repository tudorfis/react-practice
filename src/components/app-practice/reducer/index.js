import todosModule from './todos'

export const reducer = (...args) => reducerActions[args[1].action](...args)

export const STATE = {
    ...todosModule.STATE
}

const reducerActions = {
    ...todosModule.ACTIONS
}
