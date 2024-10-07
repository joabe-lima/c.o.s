import './Cadastro.css'
import logo2 from '../../img/logo.png'
import { Link } from 'react-router-dom'
import CadastroForm from '../project/CadastroForm'



    

function Cadastro () {

function createPost (project) {
    
       project.cost = 0
       project.services =[]
    
       fetch("http://localhost:5000/projects", {
           method: 'POST',
           headers: {
            'Content-Type': 'applicatin/json',
           },
           body: JSON.stringify(project),
       })
       .then((resp) => resp.json())
       .then((data) => {
        console.log(data)
    
        
       })
       .catch((err) => console.log(err))
    
    }


    return(
        <div className='container_cadastro'>
        <CadastroForm handleSubmit={createPost} />
        <div className='logo2'>
           <img src={logo2} alt='logo'/>
        </div>
        <Link to={'/home'} >.</Link>
        <p id='rodape'><span>COS</span> corporation &copy; 2024</p>
    </div>
    )
}

export default Cadastro