import SubmitButton from '../form/SubmitButton'
import Footer from '../layout/Footer'
import Navegador from '../layout/Navegador'
import './ListaCos.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            {data.map(item => (  
            <div className='painel'>
                <div className='campos_cliente'>
                    <div>
                        <h3>1</h3>
                    </div> 
                    <div>
                        <h3>Carlos</h3>
                    </div>
                    <div>
                        <h3>71943253960</h3>
                    </div>
                    <div>
                        <h3>carlos@gmail.com</h3>
                    </div>
                    <SubmitButton text='concluir'/>
                </div>    
                 
                <div className='campos_os'>
                 
                   <div>
                    <h3>Marca</h3>
                    <p key={item.id}>{item.marca}</p>
                   </div>
                   <div>
                    <h3>Modelo</h3>
                    <p>{item.modelo}</p>
                   </div>
                   <div>
                    <h3>Imei</h3>
                    <p>{item.imei}</p>
                   </div>
                   <div>
                    <h3>Data de entrega</h3>
                    <p>{item.data_entrega}</p>
                   </div>
                
                </div>
                
                <div className='campos_os'>
                
                   <div className='problema'>
                    <h3>problema relatado:</h3>
                    <p>{item.problema}</p>
                   </div> 
                   
                </div>
                  
            </div>
            ))}
        </div> 
      <Footer/>  
    </div>

        

    )
}

export default ListaCos