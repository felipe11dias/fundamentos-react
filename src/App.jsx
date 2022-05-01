/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './App.css'

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Repeticao from "./components/repeticoes/ListaAlunos";
import DesafioReticao from "./components/repeticoes/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#13 - Mega" color="#B9006E">
          <Mega qtde={8} />
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial={10} />
        </Card>
        
        <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
          <Input />
        </Card>
        
        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai />
        </Card>
        
        <Card titulo="#09 - Comunicação Direta" color="#59323C">
          <DiretaPai />
        </Card>
        
        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{nome: 'Fernando'}} />
        </Card>
        
        <Card titulo="#07 - Desafio Repetição" color="#CCCCFF">
          <DesafioReticao />
        </Card>
        
        <Card titulo="#06 - Repetição" color="#6495ED">
          <Repeticao />
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Dias">
            <FamiliaMembro nome="Felipe" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Mau" />
          </Familia>
        </Card>

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
