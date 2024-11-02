import React from 'react';
import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.title}>Meu Site de Produtos</h1>
            
            <nav className={styles.nav}>
                <a href="#" className={styles.link}>Termos de Serviço</a>
                <a href="#" className={styles.link}>Política de Privacidade</a>
                <a href="#" className={styles.link}>Contato</a>
            </nav>
            <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
            <p>Siga-nos nas redes sociais:</p>
            <p>
                <a href="#" className={styles.link}>Facebook</a> |
                <a href="#" className={styles.link}>Instagram</a> |
                <a href="#" className={styles.link}>Twitter</a>
            </p>
        </footer>
    );
}
