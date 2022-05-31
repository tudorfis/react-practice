import React from 'react'
import { AppContext } from '../App'

export default function ButtonIncrement() {
    console.log('ButtonIncrement')
    const { actions } = React.useContext(AppContext)

    return (
        <button onClick={() => actions.incrementCount()}>++</button>
    )
}
