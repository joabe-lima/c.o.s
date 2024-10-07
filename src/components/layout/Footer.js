import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'


function Footer () {
    return(
        <div className='container_footer'>
           <footer>
                <ul className='footer_ul'>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaLinkedin />
                    </li>
                    <li>
                        <FaTwitter />
                    </li>
                </ul>
                <p><span>COS</span> corporation &copy; 2024 todos os direitos reservados.</p>
           </footer>
        </div>
       
    )
}

export default Footer