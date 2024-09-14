import CosForm from "../project/CosForm"
import '../pages/Cos.css'
import { useNavigate } from 'react-router-dom'
import Navegador from "../layout/Navegador"
import Footer from "../layout/Footer"


function Cos () {

const history = useNavigate()

function createPost (produto) {
    
    produto.cost = 0
    produto.services =[]
 
    fetch("http://localhost:5000/projects", {
        method: 'POST',
        headers: {
         'Content-Type': 'applicatin/json',
        },
        body: JSON.stringify(produto),
    })
    .then((resp) => resp.json())
    .then((data) => {
     console.log(data)
 
     history('/projects', {message: 'projeto criado com sucesso !'})
    })
    .catch((err) => console.log(err))
 
 }

    return(
    <div>
      <Navegador/>  
        <div className='newproject_container'>
            <h1>Adcionar <span>O.S</span></h1>
            <p>Crie uma ordem de serviços para um cliente<br/>e agilize o serviço.</p>
            <CosForm handleSubmit={createPost} btnText="adcionar" />
        </div>
      <Footer/>  
    </div>    
        
    )
}

export default Cos