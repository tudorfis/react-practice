import React, { useEffect, useMemo, useState } from 'react'

export default function App() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    function slowFunction(num) {
        console.log('Calling Slow Function')
        for (let i = 0; i <= 10 ** 9; i++) { }
        return num * 2
    }

    const themeStyle = useMemo(() => ({
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }), [dark])

    useEffect(() => {
        console.log('after', themeStyle)

        return () => {
            console.log('before', themeStyle)
        }
    }, [themeStyle])

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button
                onClick={() => {
                    setDark(!dark)
                }}
            >Change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )
}
