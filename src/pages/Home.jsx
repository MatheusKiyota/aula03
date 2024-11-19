import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    const [lista, setLista] = useState([]);
    const [showFilters, setShowFilters] = useState(false);  // Estado para controlar a visibilidade dos filtros

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch("https://fakestoreapi.com/products");
                const dados = await resposta.json();
                setLista(dados);
            } catch {
                alert("Ocorreu um erro na comunicação com o servidor!");
            }
        };
        receberListaProdutos();
    }, []);

    // Funções de ordenação
    const orderAz = () => setLista([...lista].sort((a, b) => a.title.localeCompare(b.title)));
    const orderZa = () => setLista([...lista].sort((a, b) => b.title.localeCompare(a.title)));
    const orderMenorMaior = () => setLista([...lista].sort((a, b) => a.price - b.price));
    const orderMaiorMenor = () => setLista([...lista].sort((a, b) => b.price - a.price));

    // Função para alternar a visibilidade dos filtros
    const toggleFilters = () => setShowFilters(prevState => !prevState);

    return (
        <>
            <Header
                showFilters={showFilters} // Passa o estado de visibilidade para o Header
                toggleFilters={toggleFilters} // Passa a função que alterna o estado
                orderAz={orderAz}
                orderZa={orderZa}
                orderMenorMaior={orderMenorMaior}
                orderMaiorMenor={orderMaiorMenor}
            />
            <div className="content">
                <ListarProdutos lista={lista} />
            </div>
            <Footer />
        </>
    );
}
