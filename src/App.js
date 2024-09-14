import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import ListaCliente from './components/pages/ListaCliente'
import ListaEstoque from './components/pages/ListaEstoque'
import AddCliente from "./components/pages/AddCliente";
import AddProduto from "./components/pages/AddProduto";
import Cos from "./components/pages/Cos";
import ListaCos from "./components/pages/ListaCos";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">     
       <BrowserRouter>
                <Routes> 
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/clientes" element={<ListaCliente />} />
                  <Route path="/estoque" element={<ListaEstoque />} />
                  <Route path="/adcionar_cliente" element={<AddCliente />} />
                  <Route path="/adcionar_produto" element={<AddProduto />} />
                  <Route path="/cos" element={<Cos />} />
                  <Route path="/lista_cos" element={<ListaCos />} />
                </Routes>  
       </BrowserRouter>
    </div>
  );
}

export default App;
