import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


export function Personas(){
   
    const [data, setData] = useState([]);
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://ironrest.herokuapp.com/fabricapersona')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
         setPersona(data);
    },[data]);

    async function handleDelete(id) {
        await axios.delete(
        `https://ironrest.herokuapp.com/fabricapersona/${id}`
        );
        let deletado = persona.filter((obj) => {
            return obj._id !== id 
        });
        setPersona(deletado);
    }
    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1>PERSONAS CONSTRUÍDAS</h1>
        {persona.map((currentPersona) => {
           return (
               <>
                <div class="card" style={{width: "36rem"}} >
                    <div class="card-body">
                      <h5 class="card-title">{currentPersona.nome}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{currentPersona.idade}</h6>
                        <p class="card-text">{currentPersona.historia}</p>
                        <Link to={`/personas/${currentPersona._id}`} class="card-link">Editar</Link>
                        <button class="btn" onClick={()=>handleDelete(currentPersona._id)}>Apagar</button>
                    </div>
            </div>
               </>
           ) 
        })}
        </div>
        </>
    );
}