
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'

function CosForm({handleSubmit, btnText, projectData}){

     const [project, setProject] = useState(projectData || {})

     useEffect(() => {
             fetch("http://localhost:5000/categories", {
                 method: "GET",
                 headers: {
                     'Content-Type': 'application/json'
                 },
             })
             .then((resp) => resp.json())
             .catch(err => console.log(err))
         }, [])
     
         const submit = (e) => {
            e.preventDefault()
           // console.log(project)
            handleSubmit(project)
         }
     
         function handleChange(e) {
             setProject({ ...project, [e.target.name]: e.target.value})
            
         }

     return(
        <form onSubmit={submit} className='form'>
            <Input 
            type="text" 
            text="Modelo" 
            name="modelo" 
            placeholder="Insira o modelo" 
            handleOnChange={handleChange} 
            value={project.modelo ? project.modelo: ''}
             />

            <Input 
            type="text" 
            text="Marca" 
            name="marca" 
            placeholder="Insira a marca" 
            handleOnChange={handleChange} 
            value={project.marca ? project.marca: ''}
             />
            
            <Input 
            type="date" 
            text="Data de entrega" 
            name="data" 
            placeholder="Insira a data de entrega" 
            handleOnChange={handleChange} 
            value={project.data ? project.data: ''}
             />

            <Input 
            type="text" 
            text="Problema relatado" 
            name="problema" 
            placeholder="Insira o problema" 
            handleOnChange={handleChange} 
            value={project.problema ? project.problema: ''}
             />

            <Input 
            type="text" 
            text="Informações sobre garantia" 
            name="informe" 
            placeholder="Insira a marca" 
            handleOnChange={handleChange} 
            value={project.informe ? project.informe: ''}
             />
            
            <SubmitButton text={btnText} />  
       </form>
     )
}

export default CosForm