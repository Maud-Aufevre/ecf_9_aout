import React, {Fragment} from 'react';
import './header.css';


// raccourcis clavier pour crééer un composant fonction : scf
const Header = () => {
    return ( 
        <Fragment>
                    <h1>Blog-trotteurs</h1>
        <header id="dessusBandeau">
            <ul id="réseauxSociaux">
                <li><a href="#"><img src="img/facebook.png" alt="facebook"/></a></li>
                <li><a href="#"><img src="img/instagram.png" alt="instagram"/></a></li>
                <li><a href="#"><img src="img/twiter.png" alt="twiter"/></a></li>
            </ul>
            
            <ul id="logoEntete">
                <li><a href="blog14juin.html"><img src="img/logo-blog-trotteurs.jpg" alt="logo blog trotteurs"/></a></li>
                <li>le plein d'idées et d'expériences pour créer vos propres voyages ...</li>
            </ul>
        
        </header>
        <main id="bandeau">
            <div id="texteBandeau">
                <p>Et vous, vous partez où ?...</p>
            </div>
        </main>

       
        </Fragment>
     );
}
 
export default Header;