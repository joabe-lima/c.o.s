
import { useEffect, useState } from 'react'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/Input'
import { Link } from 'react-router-dom'


function LoginForm ({handleSubmit, btnText, projectData}) {

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

            <h1> Fazer Login</h1>

            <Input 
            type="text" 
            text="" 
            name="usuario" 
            placeholder="Insira o usuario" 
            handleOnChange={handleChange} 
            value={project.usuario ? project.usuario: ''}
             />

            <Input 
            type="password" 
            text="" 
            name="senha" 
            placeholder="Insira a senha" 
            handleOnChange={handleChange} 
            value={project.senha ? project.senha: ''}
             />

            <SubmitButton text={btnText} />  

            <Link to={'/cadastro'}>cadastrar uma conta?</Link>
       </form>
    )
}

export default LoginForm