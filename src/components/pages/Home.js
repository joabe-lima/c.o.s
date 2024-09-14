import './Home.css'
import LinkButton from '../layout/LinkButton'
import logo from '../../img/logo.png'
import Navegador from '../layout/Navegador'
import Footer from '../layout/Footer'
import propaganda from '../../img/investimento3.png'

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
                     <div className='btn_home'>
                        <LinkButton to="/adcionar_cliente" text="Adcionar Cliente" classe="btn1"/>
                        <LinkButton to="/adcionar_produto" text="Adcionar Produto" classe="btn2"/>
                     </div>
                  </div> 
                  <div className='container-logo'>
                     <img src={logo} alt='logo' />
                  </div>
               </div>
               <div className='central-home2'>
                  <div className='container-link'>
                     <h2>Quem somos nós</h2>
                     <br></br>
                     <p>quer saber quem é a empresa que criou esse aplicativo
                        que entrega tudo que você precisa para gerar suas ordens
                        de serviço e muito mais, lhe proporcionando praticidade e conforto,
                        clique aqui.</p>
                        <div>
                           <LinkButton to="" text="saiba mais"  classe="btn1"/>
                        </div>
                        </div>
                        <div className='propaganda'>
                           <img src={propaganda}/>
                        </div>
                        
                  
                  
               </div>
               
            </section>
         <Footer/>
      </div>
      
        
     

   ) 
}

export default Home
