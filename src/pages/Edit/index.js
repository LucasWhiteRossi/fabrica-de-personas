import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AvatarSelector } from '../../components/AvatarSelector'

export function Edit(){
    const params = useParams();

    const navigate = useNavigate();
    const [data, setData] = useState({})
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


    useEffect(() => {
        async function fetchEdit() {
            const response = await axios.get(
            `https://ironrest.herokuapp.com/fabricapersona/${params.id}`      
            );
            setData({...response.data});
        }
        fetchEdit();
    },[]);

    useEffect(()=>{
        setForm(data)
        console.log(data)
    },[data])

function handleChange(event){
    setForm({...form,[event.target.name]: event.target.value});
}

function handleConfirm(event){

    event.preventDefault();
    const editObj = {...form};
    delete editObj._id;

    axios.put(`https://ironrest.herokuapp.com/fabricapersona/${params.id}`, editObj);
    navigate("/personas");
}

    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1 className="text-center" >CONSTRUIR PERSONA</h1>
        <div className="card p-3" style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
        <form onSubmit={handleConfirm}>
            
            <div className="mb-3">
            {form.imagem && (<h2 className="text-center">Foto atual</h2>)}
            {form.imagem && (<div className="d-flex justify-content-center">
                < img src={require(`../../assets/avatars/${form.imagem}.jpg`)} alt={`${form.imagem}.jpg`}/>
                <br></br>
                </div>)}

                <h2 className="text-center">Escolha uma nova foto, caso queira alterar</h2>
                <br></br>
                <AvatarSelector name="imagem" handleChange={handleChange}/>
            </div>

            <h2 className="text-center">Caracter??sticas Gerais</h2>
            <br></br>
            <div class="mb-3">
                <label for="nomeCadastro" class="form-label">Qual o <strong>nome</strong> de sua persona?</label>
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
                <label for="idadeCadastro" className="form-label">Qual a <strong>idade</strong> de sua persona?</label>
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
            <label for="declaradoCadastro" className="form-label">Como sua persona <strong>se declara?</strong></label>
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
                <option value="L??sbica">L??sbica</option>
                <option value="Gay">Gay</option>
                <option value="Bissexual">Bissexual</option>
                <option value="Transexual">Transexual</option>
                <option value="Travesti">Travesti</option>
                <option value="Transg??nero">Transg??nero</option>
                <option value="Queer">Queer</option>
                <option value="Intersexo">Intersexo</option>
                <option value="Assexual">Assexual</option>
                <option value="Ag??nero">Ag??nero</option>
                <option value="Arrom??ntico">Arrom??ntico</option>
                <option value="Pansexual">Pansexual</option>
                <option value="Outros">Outros</option>
            </select>
            </div>
            </div>
            
            <div className="mb-3">
                <label for="vestimentaCadastro" className="form-label">Como <strong>se veste</strong> a persona?</label>
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
                <label for="identificacaoCadastro" className="form-label">Ela se identifica com quais <strong>grupos</strong>: esportivo, religioso, pol??tico, art??stico ou alguma corrente de pensamento?"</label>
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
                <label for="escolaridadeCadastro" className="form-label">Qual o <strong>n??vel de escolaridade?</strong></label>
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
                <label for="filhosCadastro" className="form-label">Sua persona tem <strong>filhos</strong>? Quantos e com que idades?</label>
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
                <label for="moradia-caracteristicasCadastro" className="form-label">Quais s??o as principais caracter??sticas do <strong>lugar onde sua persona mora</strong>? E quais s??o os impactos deste lugar em termos de oportunidades e desafios?</label>
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
            <h2 className="text-center">Gostos e Atividades</h2>
            <br></br>
            <div className="mb-3">
                <label for="hobbyCadastro" className="form-label">Liste <strong>tr??s</strong> coisas que <strong>mais gosta</strong> de fazer.</label>
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
                <label for="ocupacaoCadastro" className="form-label">Qual a <strong>ocupa????o</strong> da sua persona?</label>
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
            <label for="rendaCadastro" className="form-label">Qual a <strong>renda mensal</strong> da sua persona?</label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="rendaCadastro" 
                value={form.renda}
                name="renda"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="N??o possui renda">N??o possui renda</option>
                <option value="At?? R$ 1.500,00">At?? R$ 1.500,00</option>
                <option value="De R$ 1.500,00 at?? R$ 5.000,00">De R$ 1.500,00 at?? R$ 5.000,00</option>
                <option value="De R$ 5.000,00 at?? R$ 10.000,00">De R$ 5.000,00 at?? R$ 10.000,00</option>
                <option value="Acima de R$ 10.000,00">Acima de R$ 10.000,00</option>
            </select>
            </div>
            </div> 
            
            <h2 className="text-center">Hirst??ria pessoal</h2>
            <br></br>
            <div className="mb-3">
                <label for="historiaCadastro" className="form-label">Quem ?? {form.name?form.name:"sua persona"} na fila do p??o? Se quiser, descreva um pouco da hist??ria pessoal de {form.name?form.name:"sua persona"}.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="historiaCadastro" 
                value={form.historia}
                name="historia"
                onChange={handleChange} 
                ></textarea>
            </div> 
            
            <h2 className="text-center">Comportamento de Compra</h2>
            <br></br>
            <div className="mb-3">
            <label for="local-comprasCadastro" className="form-label"><strong>Onde</strong> sua persona costuma <strong>fazer compras</strong>: online ou presencialmente?</label>
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
                <option value="Loja f??sica">Loja f??sica</option>
            </select>
            </div>
            </div>

            <div className="mb-3">
                <label for="comportamentoCadastro" className="form-label">Como voc?? descreveria o <strong>comportamento de compra</strong> de sua persona? Ela prefere comprar em mercados locais? Ela frequenta shoppings? Ela prefere lojas ou sites espec??ficos? Ela evita algum tipo de loja ou experi??ncia?</label>
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
                <label for="lojas-preferidasCadastro" className="form-label"><strong>Em que lojas</strong> sua persona costuma comprar:</label>
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
                <label for="influenciadorCadastro" className="form-label">Que pessoas <strong>influenciam as decis??es</strong> de sua persona? De que forma esta influ??ncia acontece?</label>
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
                <label for="influenciadores-famososCadastro" className="form-label">Sua persona <strong>segue algum influenciador</strong>? Qual ou quais?</label>
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
                <label for="pesquisaCadastro" className="form-label">Que <strong>informa????es sua persona busca</strong> antes de realizar uma <strong>compra ou decis??o</strong>? Onde ela busca estas informa????es?</label>
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
                <label for="meio-comunicacaoCadastro" className="form-label">Que <strong>meios de comunica????o</strong> influenciam sua persona? Ela v?? televis??o? L?? jornal ou revistas? Acompanha algum canal online? Quais?</label>
                <input 
                type="text" 
                className="form-control" 
                id="meio-comunicacaoCadastro" 
                value={form["meio-comunicacao"]}
                name="meio-comunicacao"
                onChange={handleChange} 
                />
            </div>
            
            <h2 className="text-center">Intera????o com Produto</h2>
            <br></br>
            <div className="mb-3">
                <label for="desafiosCadastro" className="form-label">Quais s??o os <strong>principais desafios</strong> que sua persona tem e que seu produto pode resolver?</label>
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
                <label for="objecoesCadastro" className="form-label">Quais s??o as <strong>maiores obje????es</strong> que sua persona pode ter com rela????o ao seu produto?</label>
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
                <label for="oportunidadesCadastro" className="form-label">Quais as <strong>principais oportunidades ou benef??cios</strong> que seu produto pode oferecer para sua persona.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="oportunidadesCadastro" 
                value={form.oportunidades}
                name="oportunidades"
                onChange={handleChange} 
                ></textarea>
            </div>

            <h2 className="text-center">Tomador de decis??o</h2>
            <br></br>
            <div className="mb-3">
                <label for="papel-personaCadastro" className="form-label">Qual o papel da persona no processo de compra? Ela ?? a <strong>tomadora de decis??o</strong>? Ou ela ?? quem <strong>comunica a necessidade</strong>? Neste caso, quem toma a decis??o por ela?</label>
                <input 
                type="text" 
                className="form-control" 
                id="papel-personaCadastro" 
                value={form["papel-persona"]}
                name="papel-persona"
                onChange={handleChange} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Atualizar Persona</button>
            </form>
            </div>
            </div>
        </>


    );
}