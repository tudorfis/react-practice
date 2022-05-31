import React from 'react'

export default function ButtonDeep({ handleClick, children }) {
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
