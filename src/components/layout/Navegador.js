import './Navegador.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import { CgMenu } from "react-icons/cg";

function Navegador () {
    return(
        <div className='container_navegador'>
            <Link to='/home'>
               <img src={logo} alt='logo' className='img_logo' />
            </Link>
            <ul className='nav_ul'>
                <li className='nav_li'>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li className='nav_li'>
                    <Link to={'/clientes'}>Clientes</Link>
                </li>
                <li className='nav_li'>
                    <Link to={'/estoque'}>Estoque</Link>
                </li>
                <li className='nav_li'>
                    <Link to={'/lista_cos'}>Serviços</Link>
                </li>
                <li className='perfil'>
                <CgMenu color='#ffffff' className='icon' />
                    <div className='navbar'>
                <ul>
                    <li>
                       <Link>feedbacks</Link>
                    </li>
                    <li>
                       <Link>ajuda</Link>
                    </li>
                    <li>
                       <Link to={'/'} >sair</Link>
                    </li>
                </ul>
            </div>
                </li>
                
            </ul>
            
        </div>
        
    )
}

export default Navegador
