import { Link } from 'react-router-dom'
import '../layout/LinkButton.css'

function LinkButton ({to, text, classe}) {
    return(
        <Link className={classe} to={to}>
           {text}
        </Link>
    )
}

export default LinkButton