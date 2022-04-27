import { Navbar } from '../../components/Navbar';
import logo from "../../assets/img/logo.png"
import './style.modules.css'
import { Link } from 'react-router-dom';

export function Home(){
    
    return (

        <div className='homePage'>
            <Navbar />
            <div className="home-body">
            <div class='light x1'></div>
            <div class='light x2'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x5'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
            <div class='light x8'></div>
            <div class='light x9'></div>
                <div className='d-flex justify-content-center align-items-center' style={{backgroundColor:"rgba(255,255,255, 0.75)", width:"1000px", height:"auto", margin:"120px"}}>
                    <div className='p-5'>
                        <div>
                            <h1 style={{fontSize:"0.50el", color:"#631354"}}>Crie e armazene as suas personas.</h1>
                            <br />
                            <p style={{fontSize:"18px"}}>Desenvolva os seus conteúdos e estratégias de marketing que gerem resultados eficientes, voltadas para seu público em potencial.</p>
                            <br />
                        </div>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                            <Link to='/cadastro' className='btn btn-primary btn-lg' style={{backgroundColor:"#326dbb"}}>Gerar Persona</Link>
                        </div>
                    </div>
                    <div>
                        <img className = "m-2 rounded" src={logo} alt="Logo Fábrica de Personas" style={{width:"400px", height:"auto"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}