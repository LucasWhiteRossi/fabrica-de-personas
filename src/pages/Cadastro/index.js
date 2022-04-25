import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Cadastro(){

const navigate = useNavigate();

const [form, setForm] = useState({
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

function handleChange(event){
    setForm({...form,[event.target.name]: event.target.value});

}

function handleConfirm(){
   
    axios.post("https://ironrest.herokuapp.com/fabricapersona", form);
    navigate("/");
}

    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1>CONSTRUIR PERSONA</h1>
        <form onSubmit={handleConfirm}>
            <div class="mb-3">
                <label for="imagem" class="form-label">Imagem:</label>
                <input 
                type="text" 
                class="form-control" 
                id="imagem" 
                value={form.imagem}
                name="imagem"
                onChange={handleChange} 
                aria-describedby="emailHelp"
                />
            </div>
            <div class="mb-3">
                <label for="nomeCadastro" class="form-label">Qual o nome de sua persona?</label>
                <input 
                type="text" 
                class="form-control" 
                id="nomeCadastro" 
                value={form.nome}
                name="nome"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="idadeCadastro" class="form-label">Qual a idade de sua persona?</label>
                <input 
                type="text" 
                class="form-control" 
                id="idadeCadastro" 
                value={form.idade}
                name="idade"
                onChange={handleChange} 
                />
            </div>  
            <div class="mb-3">
                <label for="declaradoCadastro" class="form-label">Como sua persona se declara?</label>
                <input 
                type="text" 
                class="form-control" 
                id="declaradoCadastro" 
                value={form.declarado}
                name="declarado"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="vestimentaCadastro" class="form-label">Como se veste a persona?</label>
                <input 
                type="text" 
                class="form-control" 
                id="declaradoCadastro" 
                value={form.vestimenta}
                name="vestimenta"
                onChange={handleChange} 
                />
            </div>  
            <div class="mb-3">
                <label for="identificacaoCadastro" class="form-label">Ela se identifica com algum grupo? Seja esportivo, religioso, político, artístico ou alguma corrente de pensamento?",
		"escolaridade": "Qual o nível de escolaridade?</label>
                <input 
                type="text" 
                class="form-control" 
                id="identificacaoCadastro" 
                value={form.identificacao}
                name="identificacao"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="escolaridadeCadastro" class="form-label">Sua persona tem filhos? Quantos e com que idades?</label>
                <input 
                type="text" 
                class="form-control" 
                id="escolaridadeCadastro" 
                value={form.escolaridade}
                name="escolaridade"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="moradia-caracteristicasCadastro" class="form-label">Quais são as principais características do lugar onde sua persona mora? E quais são os impactos deste lugar em termos de oportunidades e desafios?</label>
                <input 
                type="text" 
                class="form-control" 
                id="moradia-caracteristicasCadastro" 
                value={form["moradia-caracteristicas"]}
                name="moradia-caracteristicas"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="hobbyCadastro" class="form-label">Liste três coisas que mais gosta de fazer.</label>
                <input 
                type="text" 
                class="form-control" 
                id="hobbyCadastro" 
                value={form.hobby}
                name="hobby"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="ocupacaoCadastro" class="form-label">Qual a ocupação da sua persona?</label>
                <input 
                type="text" 
                class="form-control" 
                id="ocupacaoCadastro" 
                value={form.ocupacao}
                name="ocupacao"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="rendaCadastro" class="form-label">Qual a renda mensal da sua persona?</label>
                <input 
                type="text" 
                class="form-control" 
                id="rendaCadastro" 
                value={form.renda}
                name="renda"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="historiaCadastro" class="form-label">Quem é …[ nome da persona] na fila do pão? Se quiser, descreva um pouco da história pessoal de [ nome da persona].</label>
                <input 
                type="text" 
                class="form-control" 
                id="historiaCadastro" 
                value={form.historia}
                name="historia"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="local-comprasCadastro" class="form-label">Onde sua persona costuma fazer compras: online ou presencialmente?</label>
                <input 
                type="text" 
                class="form-control" 
                id="local-comprasCadastro" 
                value={form["local-compras"]}
                name="local-compras"
                onChange={handleChange} 
                />
            </div> 
            <div class="mb-3">
                <label for="comportamentoCadastro" class="form-label">Como você descreveria o comportamento de compra de sua persona? Ela prefere comprar em mercados locais? Ela frequenta shoppings? Ela prefere lojas ou sites específicos? Ela evita algum tipo de loja ou experiência?</label>
                <input 
                type="text" 
                class="form-control" 
                id="comportamentoCadastro" 
                value={form.comportamento}
                name="comportamento"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="lojas-preferidasCadastro" class="form-label">Em que lojas sua persona costuma comprar:</label>
                <input 
                type="text" 
                class="form-control" 
                id="lojas-preferidasCadastro" 
                value={form["lojas-preferidas"]}
                name="lojas-preferidas"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="influenciadorCadastro" class="form-label">Que pessoas influenciam as decisões de sua persona? De que forma esta influência acontece?</label>
                <input 
                type="text" 
                class="form-control" 
                id="influenciadorCadastro" 
                value={form.influenciador}
                name="influenciador"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="influenciadores-famososCadastro" class="form-label">Sua persona segue algum influenciador? Qual ou quais?</label>
                <input 
                type="text" 
                class="form-control" 
                id="influenciadores-famososCadastro" 
                value={form["influenciadores-famosos"]}
                name="influenciadores-famosos"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="pesquisaCadastro" class="form-label">Que informações sua persona busca antes de realizar uma compra ou decisão? Onde ela busca estas informações?</label>
                <input 
                type="text" 
                class="form-control" 
                id="pesquisaCadastro" 
                value={form.pesquisa}
                name="pesquisa"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="meio-comunicacaoCadastro" class="form-label">Que meios de comunicação influenciam sua persona? Ela vê televisão? Lê jornal ou revistas? Acompanha algum canal online? Quais?</label>
                <input 
                type="text" 
                class="form-control" 
                id="meio-comunicacaoCadastro" 
                value={form["meio-comunicacao"]}
                name="meio-comunicacao"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="desafiosCadastro" class="form-label">Quais são os principais desafios que sua persona tem e que seu produto pode resolver?</label>
                <input 
                type="text" 
                class="form-control" 
                id="desafiosCadastro" 
                value={form.desafios}
                name="desafios"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="objecoesCadastro" class="form-label">Quais são as maiores objeções que sua persona pode ter com relação ao seu produto?</label>
                <input 
                type="text" 
                class="form-control" 
                id="objecoesCadastro" 
                value={form.objecoes}
                name="objecoes"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="oportunidadesCadastro" class="form-label">Quais as principais oportunidades ou benefícios que seu produto pode oferecer para sua persona.</label>
                <input 
                type="text" 
                class="form-control" 
                id="oportunidadesCadastro" 
                value={form.oportunidades}
                name="oportunidades"
                onChange={handleChange} 
                />
            </div>
            <div class="mb-3">
                <label for="papel-personaCadastro" class="form-label">Qual o papel da persona no processo de compra? Ela é a tomadora de decisão? Ou ela é quem comunica a necessidade?</label>
                <input 
                type="text" 
                class="form-control" 
                id="papel-personaCadastro" 
                value={form["papel-persona"]}
                name="papel-persona"
                onChange={handleChange} 
                />
            </div>
           
            <button type="submit" class="btn btn-primary">Gerar Persona</button>
            </form>
            </div>
        </>

    );
}


	
	
	