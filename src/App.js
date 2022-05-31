import React, { createContext, useState } from 'react'
import ButtonDecrement from './components/ButtonDecrement'
import ButtonIncrement from './components/ButtonIncrement'
import DisplayCount from './components/DisplayCount'

export const AppContext = createContext({ state: {}, actions: {} })

export default function App() {
  console.log('App')
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