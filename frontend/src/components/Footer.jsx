import '../styles/Footer.css';
import logo_footer from '../assets/images/LOGO_footer.png'

function Footer() {

  return (
    <div className="Footer_pt">
      <div className='footer-logo'><img src={logo_footer}></img></div>
      <div className='footer-text'>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
      <div className='bloc-control'></div>
    </div>
  );
}
export default Footer;