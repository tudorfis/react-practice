import React from 'react'
import { AppContext } from './AppCounter'

export default function DisplayCount() {
    const { state } = React.useContext(AppContext)

    return (
        <span>{state.count}</span>
    )
}
