import {Link} from 'react-router-dom'
import axios from 'axios'
import { Navbar } from '../../components/Navbar';
import logo from "../../assets/img/logo.png"
import './style.modules.css'

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
                <img className = "m-5 rounded" src={logo} alt="Logo Fábrica de Personas" style={{backgroundColor:"rgba(255,255,255, 0.5)", width:"400px", height:"auto"}}/>
            </div>
        </div>
    );
}