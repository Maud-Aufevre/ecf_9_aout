import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Page404 from './Page404';
import Accueil from './Accueil';
import Adminx from './Adminx';
import './nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        return ( 
            <Router>
                <nav>
                    <ul id="menu">
                        <li><button id="navAccueil"><NavLink exact activeClassName="active" to="/">Accueil</NavLink></button></li>
                        <li><button id="navContact" ><NavLink activeClassName="active" to="/admin">Administration</NavLink></button></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Accueil/>
                    </Route>
                    <Route path="/admin">
                        <Adminx/>
                    </Route>
                    <Route path="*">
                        <Page404/>
                    </Route>
                </Switch>
          </Router>
         );
    };       
    }
 
export default Nav;