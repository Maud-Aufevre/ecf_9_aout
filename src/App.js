import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';


function App() {
  return (
    <Fragment>
      <div className="">
      <Header/>
      <Nav/>
      <Footer/>
      
      </div>  
    </Fragment>
  );
}

export default App;
