import './Login.css'
import LoginForm from '../project/LoginForm'
import logo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Login () {

    const history = useNavigate()

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
    
        history('/projects', {message: 'projeto criado com sucesso !'})
       })
       .catch((err) => console.log(err))
    
    }


    return(
       <div className='container_login'>
           <LoginForm handleSubmit={createPost} btnText="enviar"/>
           <div className='logo'>
              <img src={logo} alt='logo'/>
           </div>
           <Link to={'/home'} >.</Link>
           <p id='rodape'><span>COS</span> corporation &copy; 2024</p>
       </div>
    )
}

export default Login