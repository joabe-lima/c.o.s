import { useEffect, useState } from 'react'
import SubmitButton from '../form/SubmitButton'
import Input from '../form/Input'
import { Link } from 'react-router-dom'





function CadastroForm () {



    return(
        <form onSubmit='' className='form'>

        <h1> Fazer Cadastro </h1>

        <Input 
        type="text" 
        text="" 
        name="usuario" 
        placeholder="criar o usuario" 
        handleOnChange=''
        value=''
         />

        <Input 
        type="password" 
        text="" 
        name="senha" 
        placeholder="criar a senha" 
        handleOnChange='' 
        value=''
         />

        <SubmitButton text='cadastrar' />  

        <Link to={'/'}>já tem uma conta?</Link>
   </form>
    )
}

export default CadastroForm