import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Footer from '../layout/Footer'
import Navegador from '../layout/Navegador'
import './ListaEstoque.css'
import { BiSolidEdit } from "react-icons/bi";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExcluirDado from "../project/DeleteEstoque"
import Vender from '../project/vender'
import { GrClose } from "react-icons/gr";

function ListaEstoque () {

   const [data, setData] = useState([]);

   useEffect(() => {
     axios.get('http://localhost:5000/api/data')
       .then(response => {
         setData(response.data);
       })
       .catch(error => {
         console.error('Erro ao buscar dados:', error);
       });
   }, []);

   const [isVisible, setIsVisible] = useState(false);
   
   const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

   return (
<div>
  <Navegador/> 
   <div className='container_estoque'>
      <h1>Lista de <span>Estoque</span></h1>

         <div className='busca'>
            <SubmitButton text="buscar"/>
            <Input placeholder="qual produto você procura?" />
            <button id='a' onClick={toggleVisibility} >vender produto</button>
            <div className='form-vendas'>
               <Vender/>
            </div>
         </div>
            <table>
               <thead>
                     <tr>
                        <th>ID</th>
                        <th>nome</th>
                        <th>marca</th>
                        <th>modelo</th>
                        <th>quantidade</th>
                        <th>editar</th>
                        <th>excluir</th>
                     </tr>
               </thead>
               <tbody>
               {data.map(produto => (
                     <tr>
                        <td key={produto.id}>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.marca}</td>
                        <td>{produto.modelo}</td>
                        <td>{produto.quantidade}</td>
                        <td><BiSolidEdit size={25} cursor={'pointer'}/></td>
                        <td><ExcluirDado key={produto.id} id={produto.id}/></td>
                     </tr>
                      ))}
               </tbody>
            </table>
            {isVisible && (
               <div className='painel-vender'>
          <GrClose color='c4c4c4' size={30} cursor={'pointer'} onClick={toggleVisibility} />
         <div className='painel-vender-entradas'>
            <Input 
               placeholder={'quantidade de produtos'}
               type={'number'}
               name={'quantidade'}
               text={'Quantidade'}
            />
            <Input 
               type={'number'}
               name={'id'}
               text={'ID'}
               placeholder={'quantidade de produtos'}
               
            />
            <SubmitButton text={'vender produto'} />
         </div>
      </div>
            )}
          
    
</div> 
 <Footer/>  
      </div>

      
   ) 
}

export default ListaEstoque
