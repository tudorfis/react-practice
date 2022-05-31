import React from 'react'
import { AppContext } from '../App'
import Button from './base/Button'

export default function ButtonDecrement() {
    console.log('ButtonDecrement')
    const { actions } = React.useContext(AppContext)

    return (
        <Button onClick={() => actions.decrementCount()}>--</Button>
    )
}
