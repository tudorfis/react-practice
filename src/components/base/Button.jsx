import React from 'react'

export default function Button({ onClick, children, className }) {
    return (
        <button
            className={"btn btn-primary " + className}
            onClick={onClick}
        >{children}</button>
    )
}
