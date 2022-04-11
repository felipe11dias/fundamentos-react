/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const { min, max } = props
    const valorAleatorio = Math.floor(Math.random() * (max - min)) + min;
    return (
        <>
            <h2>Valor Aleatório: min({min}) max({max})</h2>
            <p>{ valorAleatorio }</p>
        </>
    )
}
