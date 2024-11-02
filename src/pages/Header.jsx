import React from 'react';
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Meu Site de Produtos</h1>
            <nav className={styles.nav}>
                <a href="#" className={styles.link}>Home</a>
                <a href="#" className={styles.link}>Produtos</a>
                <a href="#" className={styles.link}>Contato</a>
            </nav>
        </header>
    );
}
