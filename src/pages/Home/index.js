import {Link} from 'react-router-dom'
import axios from 'axios'
import { Navbar } from '../../components/Navbar';
import logo from "../../assets/img/logo.png"
import './style.modules.css'

export function Home(){
    
    return (

        <div className='homePage'>
            <Navbar/>
            <div className="home-body">
                <img src={logo} alt="Logo Fábrica de Personas"/>
            </div>
        </div>
    );
}