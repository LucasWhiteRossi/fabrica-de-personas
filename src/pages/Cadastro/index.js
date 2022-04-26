import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AvatarSelector } from '../../components/AvatarSelector';
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
    console.log(event.target.name, event.target.value)
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
        <div className="card p-3" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
        <form onSubmit={handleConfirm}>
            
            <div className="mb-3">
                <h2 className="text-center">Escolha uma foto para sua persona</h2>
                <AvatarSelector name="imagem" handleChange={handleChange}/>
            </div>


            <div class="mb-3">
                <label for="nomeCadastro" class="form-label">Qual o nome de sua persona?</label>
                <input 
                type="text" 
                className="form-control" 
                id="nomeCadastro" 
                value={form.nome}
                name="nome"
                onChange={handleChange} 
                />
            </div> 
            <div className="mb-3">
                <label for="idadeCadastro" className="form-label">Qual a idade de sua persona?</label>
                <input 
                type="text"
                className="form-control" 
                id="idadeCadastro" 
                value={form.idade}
                name="idade"
                onChange={handleChange} 
                />
            </div>  
            <div className="mb-3">
            <label for="declaradoCadastro" className="form-label">Como sua persona se declara?</label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="declaradoCadastro" 
                aria-label="Como sua persona se declara?"
                value={form.declarado}
                name="declarado"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="Heterosexual">Heterosexual</option>
                <option value="Lésbica">Lésbica</option>
                <option value="Gay">Gay</option>
                <option value="Bissexual">Bissexual</option>
                <option value="Transexual">Transexual</option>
                <option value="Travesti">Travesti</option>
                <option value="Transgênero">Transgênero</option>
                <option value="Queer">Queer</option>
                <option value="Intersexo">Intersexo</option>
                <option value="Assexual">Assexual</option>
                <option value="Agênero">Agênero</option>
                <option value="Arromântico">Arromântico</option>
                <option value="Pansexual">Pansexual</option>
                <option value="Outros">Outros</option>
            </select>
            </div>
            </div>
            
            <div className="mb-3">
                <label for="vestimentaCadastro" className="form-label">Como se veste a persona?</label>
                <input 
                type="text" 
                className="form-control" 
                id="declaradoCadastro" 
                value={form.vestimenta}
                name="vestimenta"
                onChange={handleChange} 
                />
            </div>  
            <div className="mb-3">
                <label for="identificacaoCadastro" className="form-label">Ela se identifica com quais grupos: esportivo, religioso, político, artístico ou alguma corrente de pensamento?"</label>
                <input 
                type="text" 
                className="form-control" 
                id="identificacaoCadastro" 
                value={form.identificacao}
                name="identificacao"
                onChange={handleChange} 
                />
            </div> 
            <div className="mb-3">
                <label for="escolaridadeCadastro" className="form-label">Qual o nível de escolaridade?</label>
                <input 
                type="text" 
                className="form-control" 
                id="escolaridadeCadastro" 
                value={form.escolaridade}
                name="escolaridade"
                onChange={handleChange} 
                />
            </div> 

            <div className="mb-3">
                <label for="filhosCadastro" className="form-label">Sua persona tem filhos? Quantos e com que idades?</label>
                <input 
                type="text" 
                className="form-control" 
                id="filhosCadastro" 
                value={form.filhos}
                name="filhos"
                onChange={handleChange} 
                />
            </div>


            <div className="mb-3">
                <label for="moradia-caracteristicasCadastro" className="form-label">Quais são as principais características do lugar onde sua persona mora? E quais são os impactos deste lugar em termos de oportunidades e desafios?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="moradia-caracteristicasCadastro" 
                value={form["moradia-caracteristicas"]}
                name="moradia-caracteristicas"
                onChange={handleChange} 
                aria-label="With textarea"
                ></textarea>
            </div> 

            <div className="mb-3">
                <label for="hobbyCadastro" className="form-label">Liste três coisas que mais gosta de fazer.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="hobbyCadastro" 
                value={form.hobby}
                name="hobby"
                onChange={handleChange} 
                ></textarea>
            </div> 

            <div className="mb-3">
                <label for="ocupacaoCadastro" className="form-label">Qual a ocupação da sua persona?</label>
                <input 
                type="text" 
                className="form-control" 
                id="ocupacaoCadastro" 
                value={form.ocupacao}
                name="ocupacao"
                onChange={handleChange} 
                />
            </div> 
          
            <div className="mb-3">
            <label for="rendaCadastro" className="form-label">Qual a renda mensal da sua persona?</label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="rendaCadastro" 
                value={form.renda}
                name="renda"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="Não possui renda">Não possui renda</option>
                <option value="Até R$ 1.500,00">Até R$ 1.500,00</option>
                <option value="De R$ 1.500,00 até R$ 5.000,00">De R$ 1.500,00 até R$ 5.000,00</option>
                <option value="De R$ 5.000,00 até R$ 10.000,00">De R$ 5.000,00 até R$ 10.000,00</option>
                <option value="Acima de R$ 10.000,00">Acima de R$ 10.000,00</option>
            </select>
            </div>
            </div> 

            <div className="mb-3">
                <label for="historiaCadastro" className="form-label">Quem é {form.name} na fila do pão? Se quiser, descreva um pouco da história pessoal de {form.name}.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="historiaCadastro" 
                value={form.historia}
                name="historia"
                onChange={handleChange} 
                ></textarea>
            </div> 
            
            <div className="mb-3">
            <label for="local-comprasCadastro" className="form-label">Onde sua persona costuma fazer compras: online ou presencialmente?</label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="local-comprasCadastro" 
                value={form["local-compras"]}
                name="local-compras"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="Loja virtual">Loja virtual</option>
                <option value="Loja física">Loja física</option>
            </select>
            </div>
            </div>

            <div className="mb-3">
                <label for="comportamentoCadastro" className="form-label">Como você descreveria o comportamento de compra de sua persona? Ela prefere comprar em mercados locais? Ela frequenta shoppings? Ela prefere lojas ou sites específicos? Ela evita algum tipo de loja ou experiência?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="comportamentoCadastro" 
                value={form.comportamento}
                name="comportamento"
                onChange={handleChange} 
                ></textarea>
            </div> 

            <div className="mb-3">
                <label for="lojas-preferidasCadastro" className="form-label">Em que lojas sua persona costuma comprar:</label>
                <input 
                type="text" 
                className="form-control" 
                id="lojas-preferidasCadastro" 
                value={form["lojas-preferidas"]}
                name="lojas-preferidas"
                onChange={handleChange} 
                />
            </div>
            
            <div className="mb-3">
                <label for="influenciadorCadastro" className="form-label">Que pessoas influenciam as decisões de sua persona? De que forma esta influência acontece?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="influenciadorCadastro" 
                value={form.influenciador}
                name="influenciador"
                onChange={handleChange} 
                ></textarea>
            </div> 

            <div className="mb-3">
                <label for="influenciadores-famososCadastro" className="form-label">Sua persona segue algum influenciador? Qual ou quais?</label>
                <input 
                type="text" 
                className="form-control" 
                id="influenciadores-famososCadastro" 
                value={form["influenciadores-famosos"]}
                name="influenciadores-famosos"
                onChange={handleChange} 
                />
            </div>
            <div className="mb-3">
                <label for="pesquisaCadastro" className="form-label">Que informações sua persona busca antes de realizar uma compra ou decisão? Onde ela busca estas informações?</label>
                <input 
                type="text" 
                className="form-control" 
                id="pesquisaCadastro" 
                value={form.pesquisa}
                name="pesquisa"
                onChange={handleChange} 
                />
            </div>
            <div className="mb-3">
                <label for="meio-comunicacaoCadastro" className="form-label">Que meios de comunicação influenciam sua persona? Ela vê televisão? Lê jornal ou revistas? Acompanha algum canal online? Quais?</label>
                <input 
                type="text" 
                className="form-control" 
                id="meio-comunicacaoCadastro" 
                value={form["meio-comunicacao"]}
                name="meio-comunicacao"
                onChange={handleChange} 
                />
            </div>
            
            <div className="mb-3">
                <label for="desafiosCadastro" className="form-label">Quais são os principais desafios que sua persona tem e que seu produto pode resolver?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="desafiosCadastro" 
                value={form.desafios}
                name="desafios"
                onChange={handleChange} 
                ></textarea>
            </div>

            <div className="mb-3">
                <label for="objecoesCadastro" className="form-label">Quais são as maiores objeções que sua persona pode ter com relação ao seu produto?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="objecoesCadastro" 
                value={form.objecoes}
                name="objecoes"
                onChange={handleChange} 
                ></textarea>
            </div>
            <div className="mb-3">
                <label for="oportunidadesCadastro" className="form-label">Quais as principais oportunidades ou benefícios que seu produto pode oferecer para sua persona.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="oportunidadesCadastro" 
                value={form.oportunidades}
                name="oportunidades"
                onChange={handleChange} 
                ></textarea>
            </div>

            <div className="mb-3">
                <label for="papel-personaCadastro" className="form-label">Qual o papel da persona no processo de compra? Ela é a tomadora de decisão? Ou ela é quem comunica a necessidade?</label>
                <input 
                type="text" 
                className="form-control" 
                id="papel-personaCadastro" 
                value={form["papel-persona"]}
                name="papel-persona"
                onChange={handleChange} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Gerar Persona</button>
            </form>
            </div>
            </div>
        </>

    );
}
