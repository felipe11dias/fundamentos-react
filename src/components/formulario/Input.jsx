/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

import './Input.css'

export default () => {

    const[valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value);
    }

  return (
    <div class="Input">
        <h2>{valor}</h2>
        <div className='div-inputs'>
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly />
            <input value={undefined} />
        </div>
    </div>
  )
}
