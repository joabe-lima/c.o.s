import Input from '../form/Input'

import SubmitButton from '../form/SubmitButton'
import '../project/ProjectForm.css'
import { useState } from 'react'
import axios from 'axios';

function ProjectForm ({btnText}) {


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/adcionar', { nome, telefone, email });
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
            placeholder="Insira o nome do cliente" 
            handleOnChange={(e) => setNome(e.target.value)} required 
            value={nome}
             />

            <Input 
            type="text" 
            text="E-mail" 
            name="email" 
            placeholder="Insira o e-mail do cliente" 
            handleOnChange={(e) => setEmail(e.target.value)} required 
            value={email}
             />
            
             <Input 
            type="number" 
            text="Telefone" 
            name="telefone" 
            placeholder="Insira o telefone do cliente" 
            handleOnChange={(e) => setTelefone(e.target.value)} required 
            value={telefone}
             />
            
            <SubmitButton text={btnText} />  
       </form>
    )
}

export default ProjectForm