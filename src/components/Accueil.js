import React, {Fragment} from 'react';
import './accueil.css';

const Accueil = () => {
    const art = JSON.parse(localStorage.getItem('datas'));
    let test = false;
    let testV = false;
    if(art){
        test = true;
    }
    
    if(test && art.length > 0){
        testV = true;
    }
    return ( 
        <Fragment>
            <div id="corpsPage">
                {testV ? art.map((e,i) => {
                    return(
                        <article className="article" key={i}>
                            <div className="image">
                                <img src={e.image} alt="visu"/>
                            </div>
                            <ul className="légende">
                                <li className="pays">{e.pays}</li>
                                <li className="typeTrip">{e.descritpion}</li>
                                <li className="auteur">- par  {e.auteur}  -</li>
                                <li className="récit">{e.recit}</li>
                            </ul>
                        </article>
                    );
                }) : "Aucun article pour l'instant"
                }
            </div>
        </Fragment>
     );
}
 
export default Accueil;