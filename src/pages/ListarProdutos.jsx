import styles from '../styles/listarProdutos.module.css';


export default function ListarProdutos({ lista }) {
    return (
        <div className={styles.container}>
            <ul className={styles.bloco}>
                {lista.map(produto => (
                    <li className={styles.li} key={produto.id}>
                        <img className={styles.foto} src={produto.image} alt={produto.title} />
                        <div className={styles.content}>
                            <h2 className={styles.titulo}>{produto.title}</h2>
                            <p className={styles.valor}>R$ {produto.price}</p>
                            <button className={styles.botao}>Obter</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
