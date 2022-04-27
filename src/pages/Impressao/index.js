import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import {useParams} from 'react-router-dom'

export function Impressao(){

    const params = useParams();
    const [data, setData] = useState({});
    const [impressao, setImpressao] = useState({
        imagem: "",
		nome: "",
		idade: "",
        declarado: "",
        vestimenta: "",
        identificacao: "",
        escolaridade: "",
        filhos: "",
        "moradia-caracteristicas": "",
        hobby: "",
        ocupacao: "",
        renda: "",
        historia: "",
        "local-compras": "",
        comportamento: "",
        "lojas-preferidas": "",
        influenciador: "",
        "influenciadores-famosos": "",
        pesquisa: "",
        "meio-comunicacao": "",
        desafios: "",
        objecoes: "",
        oportunidades: "",
        "papel-persona": ""	
    });

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(`https://ironrest.herokuapp.com/fabricapersona/${params.id}`)
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
        setImpressao(data);
    },[data]);

    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1>MINHA PERSONA</h1>
        
        <p>{impressao.nome}</p>
        <p>{impressao.idade}</p>
        <p>{impressao.declarado}</p>
        <p>{impressao.vestimenta}</p>
        <p>{impressao.identificacao}</p>
        <p>{impressao.escolaridade}</p>
        <p>{impressao.filhos}</p>
        <p>{impressao["moradia-caracteristicas"]}</p>
        <p>{impressao.hobby}</p>
        <p>{impressao.ocupacao}</p>
        <p>{impressao.renda}</p>
        <p>{impressao.historia}</p>
        <p>{impressao["local-compras"]}</p>
        <p>{impressao.comportamento}</p>
        <p>{impressao.historia}</p>
        <p>{impressao["lojas-preferidas"]}</p>
        <p>{impressao.influenciador}</p>
        <p>{impressao["influenciadores-famosos"]}</p>
        <p>{impressao.pesquisa}</p>
        <p>{impressao["meio-comunicacao"]}</p>
        <p>{impressao.desafios}</p>
        <p>{impressao.objecoes}</p>
        <p>{impressao.oportunidades}</p>
        <p>{impressao["papel-persona"]}</p>
        
        </div>
        </>
    );
}