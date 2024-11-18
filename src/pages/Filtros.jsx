import React from 'react';
import styles from '../styles/filtros.module.css';

export default function Filtros(){
    return(
        <>
        <div className="Filtros">
            <button onClick={orderAz}>A-Z</button>
            <button onClick={orderZa}>Z-A</button>
            <button onClick={orderMenorMaior}>Preço: Menor - Maior</button>
            <button onClick={orderMaiorMenor}>Preço: Maior - Menor</button>
        </div>

    </>
    )
}