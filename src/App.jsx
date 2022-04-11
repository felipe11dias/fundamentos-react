/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

import './App.css'

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
        <Aleatorio min={0} max={1000} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Segundo Componente"
            aluno="Felipe"
            nota={10.0}
            subtitulo="Muito legal!"
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
