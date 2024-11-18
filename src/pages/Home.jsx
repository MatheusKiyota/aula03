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
                console.log(dados); // Verifique se os dados aparecem no console
                setLista(dados);
            } catch {
                alert('Ocorreu um erro na comunicação com o servidor!');
            }
        };
        receberListaProdutos();
    }, []);


    const orderAz = () => {
        const listaOrdenada = [...lista].sort((a, b) => a.title.localeCompare(b.title));
        setLista(listaOrdenada);
    };

    const orderZa = () => {
        const listaOrdenada = [...lista].sort((a, b) => b.title.localeCompare(a.title));
        setLista(listaOrdenada);
    };

    const orderMenorMaior = () => {
        const listaOrdenada = [...lista].sort((a, b) => a.price - b.price);
        setLista(listaOrdenada);
    };


    const orderMaiorMenor = () => {
        const listaOrdenada = [...lista].sort((a, b) => b.price - a.price);
        setLista(listaOrdenada);
    };

  

    return (
        <>
            <Header />
            <Filtros />

            <div className="content">
                <ListarProdutos lista={lista} />
            </div>
            
            <Footer />
        </>
    );
}
