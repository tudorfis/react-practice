import React from 'react'

export default function Button({ onClick, children }) {
    return (
        <button
            className="btn btn-primary"
            onClick={onClick}
        >{children}</button>
    )
}
