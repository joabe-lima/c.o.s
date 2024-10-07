import SubmitButton from '../form/SubmitButton'
import Footer from '../layout/Footer'
import Navegador from '../layout/Navegador'
import './ListaCos.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Input from '../form/Input'

function ListaCos () {

    const [data, setData] = useState([]);

   useEffect(() => {
     axios.get('http://localhost:5000/api/cos')
       .then(response => {
         setData(response.data);
       })
       .catch(error => {
         console.error('Erro ao buscar dados:', error);
       });
   }, []);

    return(

    <div>
      <Navegador/>  
       <div className='central_cos'>

            <h1>Lista de <span>O.S</span></h1>
            <p>aqui você encontra todas as ordems de serviços emitidas</p>
            <div className='cos_plataforma'>
              <div className='busca_cos'>
              <SubmitButton text={'buscar'}/>
              <Input placeholder={'qual ordem procura ?'} />
            </div>
            {data.map(item => (  
            <div className='painel'>
                <div className='campos_cliente'>
                    <div>
                        <h4>1</h4>
                    </div> 
                    <div>
                        <h4>Carlos</h4>
                    </div>
                    <div>
                        <h4>71943253960</h4>
                    </div>
                    <div>
                        <h4>carlos@gmail.com</h4>
                    </div>
                    <SubmitButton text='concluir'/>
                </div>    
                 
                <div className='campos_os'>
                 
                   <div className='item'>
                    <h4>Marca:</h4>
                    <p key={item.id}>{item.marca}</p>
                   </div>
                   <div className='item'>
                    <h4>Modelo:</h4>
                    <p>{item.modelo}</p>
                   </div>
                   <div className='item'>
                    <h4>Imei:</h4>
                    <p>{item.imei}</p>
                   </div>
                   <div className='item'>
                    <h4>Data de entrega:</h4>
                    <p>{item.data_entrega}</p>
                   </div>
                
                </div>
                
                <div className='campos_os'>
                
                   <div className='problema'>
                    <h4>problema relatado:</h4>
                    <p>{item.problema}</p>
                   </div> 
                   
                </div>
                 
            </div>
            ))}
            </div>
            
        </div> 
      <Footer/>  
    </div>

        

    )
}

export default ListaCos