import './AddCliente.css'
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import Navegador from '../layout/Navegador'
import Footer from '../layout/Footer'



function AddCliente () {

    

    return(
        <div>
           <Navegador/> 
            <div className='newproject_container'>
                <h1>Adcionar <span>Cliente</span></h1>
                <p>Adcione pessoas a sua lista de clientes<br/> para uma melhor organização.</p>
                <ProjectForm btnText="adcionar" />
            </div>
           <Footer/>   
        </div>
        
    )
}

export default AddCliente