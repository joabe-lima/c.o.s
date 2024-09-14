import './AddProduto.css'
import ProdutoForm from '../project/ProdutoForm'
import { useNavigate } from 'react-router-dom'
import Navegador from '../layout/Navegador'
import Footer from '../layout/Footer'

function AddProduto () {
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
                <h1>Cadastrar <span>Produto</span></h1>
                <p>Adcione produtos ao seu estoque para uma<br/> melhor gestão de recursos.</p>
                <ProdutoForm handleSubmit={createPost} btnText="adcionar" />
            </div> 
           <Footer/>  
        </div>
        
    )
}

export default AddProduto