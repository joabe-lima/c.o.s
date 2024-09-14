
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Footer from '../layout/Footer'
import LinkButton from '../layout/LinkButton'
import Navegador from '../layout/Navegador'
import './ListaCliente.css'
import { VscTrash } from "react-icons/vsc";
import { BiSolidEdit } from "react-icons/bi";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function ListaCliente () {

  const [data, setData] = useState([]);

   useEffect(() => {
     axios.get('http://localhost:5000/api/cliente')
       .then(response => {
         setData(response.data);
       })
       .catch(error => {
         console.error('Erro ao buscar dados:', error);
       });
   }, []);


   return (
     <div>
       <Navegador/>
         <div className='container_listaCliente'>
            <h1>Lista de <span>Clientes</span></h1>

            <div className='busca'>
               <SubmitButton text="buscar"/>
               <Input placeholder="quem você procura?" />
            </div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                            <th>telefone</th>
                            <th>email</th>
                            <th>status</th>
                            <th>editar</th>
                            <th>excluir</th>
                            <th>o.s</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                       <tr>
                         <td key={item.id}>{item.id}</td>
                         <td>{item.nome}</td>
                         <td>{item.telefone}</td>
                         <td>{item.email}</td>
                         <td>livre</td>
                         <td><BiSolidEdit size={25} cursor={'pointer'}/></td>
                         <td><VscTrash color='red' size={25} cursor={'pointer'}/></td>
                         <td><LinkButton to="/Cos" text="criar" classe="btn"/></td>
                       </tr>
                       ))}
                    </tbody>
                </table>
           </div>
        <Footer/> 
     </div>   
      
      

   ) 
}

export default ListaCliente
