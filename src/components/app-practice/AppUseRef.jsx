import React, { useEffect, useRef, useState } from 'react'

export default function AppUseRef() {
    const [name, setName] = useState('')
    const prevName = useRef('')
    const inputRef = useRef()

    useEffect(() => {
        prevName.current = name
    }, [name])

    return <>
        <input
            ref={inputRef}
            value={name}
            onChange={() => setName(inputRef.current.value)}
        />
        <div>My name is {name} and it used to be {prevName.current}</div>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
}
