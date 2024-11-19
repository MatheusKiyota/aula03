import React from "react";
import styles from "../styles/header.module.css";

export default function Header({ showFilters, toggleFilters, orderAz, orderZa, orderMenorMaior, orderMaiorMenor }) {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <h1 className={styles.title}>Meu Site de Produtos</h1>
            </div>
            <nav className={styles.nav}>
                <a href="#" className={styles.filterButton} onClick={toggleFilters}>
                    Filtros
                </a>
                {showFilters && (
                    <ul className={styles.filterList}>
                        <li onClick={orderAz}>A-Z</li>
                        <li onClick={orderZa}>Z-A</li>
                        <li onClick={orderMenorMaior}>Preço: Menor - Maior</li>
                        <li onClick={orderMaiorMenor}>Preço: Maior - Menor</li>
                    </ul>
                )}
                <a href="#" className={styles.link}>Home</a>
                <a href="#" className={styles.link}>Produtos</a>
                <a href="#" className={styles.link}>Ofertas</a>
            </nav>
        </header>
    );
}
