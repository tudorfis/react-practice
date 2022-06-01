import React from 'react'
import { AppContext } from './AppCounter'
import Button from '../base/Button'

export default function ButtonDecrement() {
    const { actions } = React.useContext(AppContext)

    return (
        <Button onClick={() => actions.incrementCount()}>+</Button>
    )
}
