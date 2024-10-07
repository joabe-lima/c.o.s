import './Home.css'
import LinkButton from '../layout/LinkButton'
import logo from '../../img/logo.png'
import Navegador from '../layout/Navegador'
import Footer from '../layout/Footer'
import produto from '../../img/produto.jpg'
import vendas from '../../img/clientes.jpg'
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";



function Home () {
   return (
      <div>
         <Navegador/>
            <section className='home_container'>
               <div className='central-home'>
                  <div className='container-link'>
                     <h1>Controle de ordem <br/>de serviço <span>COS</span></h1>
                     <p>com este aplicativo torne o gerenciamento do seu negocio ágio e 
                        prático, e torne o dia a dia da sua empresa uma experiência
                        agradável e produtiva, com uma interface simples elegante e de 
                        fácil manuzeio, proporcionando a você o melhor que pode se 
                        oferecer no mercado.</p>
                  </div> 
                  <div className='container-logo'>
                     <img src={logo} alt='logo' />
                  </div>
               </div>
                           
               <div className='central-home2'>
                  <h1>PRODUTOS</h1>
                  <div className='container-link2'>
                     <h2> PRODUTOS</h2>
                     <br></br>
                     <p>com esta opção você tem a possibilidade de cadastrar produtos ao seu estoque
                        gerindo melhor os produtos da sua empresa.</p>
                        <div>
                           <LinkButton to="/adcionar_produto" text="ADCIONAR PRODUTO " classe="btn2"/>
                        </div>
                        </div>
                        <div className='propaganda'>
                           <img src={produto} alt='propaganda'/>
                        </div>
                        
                  
               </div>
               <div className='central-home3'>
                  
                  <div className='clientes'>
                     <img src={vendas} alt='grafico'/>
                  </div> 
                  <h1>CLIENTES</h1>
                  <div className='container-venda'>
                     <h2>CLIENTES</h2>
                     <br></br>
                     <p>aqui você tem a possibilidade de cadastrar clientes em sua lista agilizando serviços 
                        e atendimentos.</p>
                        <br></br>
                     <LinkButton to="/adcionar_cliente" text="ADCIONAR CLIENTE" classe="btn1"/>        
                  </div>
                  
               </div>
               <div className='central-home4'>
                  <h1>SOBRE NÓS</h1>
                  <div className='container-empresa'>
                      <h2>SOBRE NÓS</h2>
                      <p>fique por dentro de tudo que acontece em nossa empresa e esteja atualizado
                         sobre as novidades.</p>
                  </div>
               </div>
               <div className='informacao'>
                  <div className='informacao-1'>
                     <MdLocationOn color='white' size={40} /><p>rua 1 av 2 não sei onde mais 3030-01</p>
                  </div> 
                  <div className='informacao-2'>
                     <FiPhoneCall color='white' size={40} /><p>+55 071 912345678</p>
                  </div> 
                  <div className='informacao-3'>
                     <AiOutlineMail color='white' size={40} /><p>empresa@gmail.com</p>
                  </div> 
               </div>
            </section>
         <Footer/>
      </div>

   ) 
}

export default Home
