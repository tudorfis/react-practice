import React, { createContext, useState } from 'react'
import ButtonDecrement from './ButtonDecrement'
import ButtonIncrement from './ButtonIncrement'
import DisplayCount from './DisplayCount'

export const AppContext = createContext({ state: {}, actions: {} })

export default function App() {
    const [count, setCount] = useState(4)
    const [products, setProducts] = useState([])

    const context = {
        state: {
            count,
            products
        },
        actions: {
            decrementCount() {
                setCount(count - 1)
            },
            incrementCount() {
                setCount(count + 1)
            },
            changeProducts(products) {
                setProducts(products)
            }
        }
    }

    return (
        <AppContext.Provider value={context}>
            <ButtonDecrement />
            <DisplayCount />
            <ButtonIncrement />
        </AppContext.Provider>
    )
}