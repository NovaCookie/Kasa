import '../styles/NavBar.css';
import LOGO from '../assets/images/LOGO.png'

function NavBar() {

  return (
    <div className="Navbar_pt">
      <div className='logo'><img src={LOGO}></img></div>
      <div>
        <ul>
          <li><a href='/' className='accueil_link'>Accueil</a></li>
          <li><a href='/about' className='accueil_link'>A propos</a></li>
        </ul>
      </div>
    </div> 
    );
}
export default NavBar;