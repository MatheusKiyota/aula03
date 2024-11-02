import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            } catch {
                alert('Ocorreu um erro na comunicação com o servidor!');
            }
        }

        receberListaProdutos();
    }, []);

    return (
        <>
            <Header />
            <div className="content">
                <ListarProdutos lista={lista}/>
            </div>
            <Footer />
        </>
    );
}
