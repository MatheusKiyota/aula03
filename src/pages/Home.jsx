import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    const [lista, setLista] = useState([]);
    const [showFilters, setShowFilters] = useState(false);  

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

    
    const orderAz = () => setLista([...lista].sort((a, b) => a.title.localeCompare(b.title)));
    const orderZa = () => setLista([...lista].sort((a, b) => b.title.localeCompare(a.title)));
    const orderMenorMaior = () => setLista([...lista].sort((a, b) => a.price - b.price));
    const orderMaiorMenor = () => setLista([...lista].sort((a, b) => b.price - a.price));
    const toggleFilters = () => setShowFilters(prevState => !prevState);

  
    const buscaProdutos = (query) => {
        const listaFiltrada = lista.filter(produto =>
            produto.title.toLowerCase().includes(query.toLowerCase())
        );
        setLista(listaFiltrada);
    };

    return (
        <>
            <Header
                showFilters={showFilters} 
                toggleFilters={toggleFilters} 
                orderAz={orderAz}
                orderZa={orderZa}
                orderMenorMaior={orderMenorMaior}
                orderMaiorMenor={orderMaiorMenor}
                buscaProdutos={buscaProdutos} 
            />
            <div className="content">
                <ListarProdutos lista={lista} />
            </div>
            <Footer />
        </>
    );
}
