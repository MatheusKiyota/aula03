 import styles from '../styles/listarProdutos.module.css'

        export default function ListarProdutos({lista}) {
            return(
                <>
                <ul className={styles.bloco}>
                    {lista.map(produto => (
                        <li className={styles.li} key={produto.id}>   
                            <h2>{produto.title}</h2>
                            <p>{produto.descripition}</p>
                            <p className={styles.precinho}>Preço: {produto.price}</p>
                            <img className={styles.imagem} src={produto.image} alt={produto.title} width={200}/>
                        </li>
                    ))}
                    </ul>
                </>
            )
        }       