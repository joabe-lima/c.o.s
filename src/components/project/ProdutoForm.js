import Input from '../form/Input'

import SubmitButton from '../form/SubmitButton'
import '../project/ProdutoForm.css'
import { useState } from 'react'
import axios from 'axios';

function ProdutoForm ({btnText}) {


    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [quantidade, setQuantidade] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/estoque', { nome, marca, modelo, quantidade });
        alert(`Data submitted with ID: ${response.data.id}`);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };

    

    return(
       <form onSubmit={handleSubmit} className='form'>
            <Input 
            type="text" 
            text="Nome" 
            name="nome" 
            placeholder="Insira o nome do produto" 
            handleOnChange={(e) => setNome(e.target.value)} required 
            value={nome}
             />

            <Input 
            type="text" 
            text="Marca" 
            name="marca" 
            placeholder="Insira a marca do produto" 
            handleOnChange={(e) => setMarca(e.target.value)} required 
            value={marca}
             />

            <Input 
            type="text" 
            text="Modelo" 
            name="modelo" 
            placeholder="Insira o modelo do produto" 
            handleOnChange={(e) => setModelo(e.target.value)} required 
            value={modelo}
             />
            
             <Input 
            type="number" 
            text="Quantidade" 
            name="quantidade" 
            placeholder="Insira a quantidade" 
            handleOnChange={(e) => setQuantidade(e.target.value)} required 
            value={quantidade}
             />
            
            <SubmitButton text={btnText} />  
       </form>
    )
}

export default ProdutoForm