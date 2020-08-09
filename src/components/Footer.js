import React, {Fragment} from 'react';
import './footer.css';

const Footer = () => {
    return ( 
        <Fragment>
            <footer id="piedPage">
        <main id="piedPageBlanc">
            <div id="logoPied">
                <a href="blog14juin.html"><img src="img/logo-blog-trotteurs.jpg" alt="logo blog-trotteurs"/></a>
            </div>
            <p>suivez-nous sur :</p>
            <ul id="réseauxSociauxPied">
                <li><a href="#"><img src="img/facebook.png" alt="facebook"/></a></li>
                <li><a href="#"><img src="img/instagram.png" alt="instagram"/></a></li>
                <li><a href="#"><img src="img/twiter.png" alt="twiter"/></a></li>
            </ul>
        </main>
        <footer id="liensMentions">
            <p id="droits">Tous droits réservés &emsp;-</p>
            <p id="mentions"><a href="mentions-légales.html">Mentions légales &emsp;-</a></p>
            <p id="cont"><a href="contact.html">Contact</a></p>
        </footer>
    </footer>
        </Fragment>
     );
}
 
export default Footer;