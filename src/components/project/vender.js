import SubmitButton from "../form/SubmitButton"
import Input from "../form/Input"




function Vender () {
    return(
        <form  className='form'>
            <Input 
            type="number" 
            text="ID" 
            name="id" 
            placeholder="Insira o ID do produto" 
            value={''}
             />

            <Input 
            type="number" 
            text="quantidade" 
            name="quantidade" 
            placeholder="Insira quantos produtos vender" 
            value={''}
             />
            
            <SubmitButton text="vender" />  
       </form>
    )
}

export default Vender