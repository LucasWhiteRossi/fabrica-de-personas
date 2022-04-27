import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Cadastro} from './pages/Cadastro';
import {Personas} from './pages/Personas';
import {Edit} from './pages/Edit';
import { Impressao } from './pages/Impressao';
import './App.css';
import { ProjetoPersona } from './pages/ProjetoPersona';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/personas" element={<Personas/>}/>
        <Route path="/personas/:id" element={<Edit/>}/>
        <Route path="/impressao/:id" element={<Impressao/>} />
        <Route path="/como-utilizar" element={<ProjetoPersona/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
