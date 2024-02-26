import { Link } from "react-router-dom";
import '../styles/NotFound.css'

function NotFound() {

    return (
        <div className="NotFound_pt">
            <h1 className="err_title">404</h1>
            <p className="err_txt">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="err_link">Retourner sur la page d’accueil</Link>
        </div>
        
    )
}
export default NotFound;