import React from 'react'
import ButtonDeep from './ButtonDeep'

export default function Button({ onClick, children }) {
    return (
        <div className="btn-btnprimary">
            <ButtonDeep handleClick={onClick}>
                Click: {children}
            </ButtonDeep>
        </div>
    )
}
