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

        <h1 className="text-center" style={{color:"white"}}>MINHA PERSONA</h1>

        <div className="d-flex justify-content-center align-items-center">
            
            <div className="justify-content-center align-items-center" style={{width: "48rem", backgroundColor:"rgba(255,255,255,0.7)", borderRadius: "30px"}} >
            
                <div className='d-flex justify-content-center align-items-center rounded p-5' >

                    {impressao.imagem && <img className="rounded" style={{width:"0.5el", height:"auto"}} src={require(`../../assets/avatars/${impressao.imagem}.jpg`)} alt={`${impressao.imagem}.jpg`}/>}
                </div>

                <div className="d-flex align-items-center justify-content-center p-5">
                    <div>
                        <h2 className="text-center" style={{color:"#631354"}}>Características Gerais</h2>
                        <p>{impressao.nome}</p>
                        <p>{impressao.idade}</p>
                        <p>{impressao.declarado}</p>
                        <p>{impressao.vestimenta}</p>
                        <p>{impressao.identificacao}</p>
                        <p>{impressao.escolaridade}</p>
                        <p>{impressao.filhos}</p>
                        <p>{impressao["moradia-caracteristicas"]}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Gostos e Atividades</h2>
                        <p>{impressao.hobby}</p>
                        <p>{impressao.ocupacao}</p>
                        <p>{impressao.renda}</p>
                        <p>{impressao.historia}</p>
                        <p>{impressao["local-compras"]}</p>
                        <p>{impressao.comportamento}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>História pessoal</h2>
                        <p>{impressao.historia}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Comportamento de Compra</h2>
                        <p>{impressao["lojas-preferidas"]}</p>
                        <p>{impressao.influenciador}</p>
                        <p>{impressao["influenciadores-famosos"]}</p>
                        <p>{impressao.pesquisa}</p>
                        <p>{impressao["meio-comunicacao"]}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Interação com Produto</h2>
                        <p>{impressao.desafios}</p>
                        <p>{impressao.objecoes}</p>
                        <p>{impressao.oportunidades}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Tomador de decisão</h2>
                        <p>{impressao["papel-persona"]}</p>
                        <br></br>
                        <Link to={`/personas/${impressao._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                    </div>
                
                </div>
            </div>

            </div>
       
        </div>
        </>
    );
}