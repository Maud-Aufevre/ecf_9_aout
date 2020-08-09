import React, { Component, Fragment } from 'react';
import Articles from './Articles';
import Ajout from './Ajout';
import './adminx.css';

class Adminx extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas:[
                {id:1, image: "colombie.jpg", pays:"Colombie", descritpion:"La vallée de Corora", auteur:"Alicia", recit:"El Valle de Cocora en Colombie dans le triangle du café colombien. Des collines recouvertes par des palmiers à cire ..."},
                {id:2, image: "magagascar.jpg", pays:"madagascar", descritpion:"Descente du fleuve Tsirihina en pirogue", auteur:"Ulysse et Camille", recit:"3 jours à bord d'une pirogue, point culminant de notre road trip à Madagascar ..."},
                {id:3, image: "colombie2.jpg", pays:"Colombie", descritpion:"Le village de Barichara", auteur:"Célia", recit:"Superbe village bourré de charmes. Rues pavées, maisons blanches au style andalou, toits en tuiles rouges sous le ciel ..."},
                {id:4, image: "afrique-du-sud.jpg", pays:"afrique du sud", descritpion:"Le Cap de Bonne-Espérence", auteur:"Marina", recit:"C'est le bout du monde en Afrique du Sud ! Comment visiter la Péninsule du Cap jusqu'au Cape Point en une ..."},
                {id:5, image: "colombie.jpg", pays:"Colombie", descritpion:"La vallée de Cocora", auteur:"Alicia", recit:"El Valle de Cocora en Colombie dans le triangle du café colombien. Des collines recouvertes par des palmiers à cire ..."},
                {id:6, image: "magagascar.jpg", pays:"madagascar", descritpion:"Descente du fleuve Tsirihina en pirogue", auteur:"Ulysse et Camille", recit:"3 jours à bord d'une pirogue, point culminant de notre road trip à Madagascar ..."},
            ],
         };
    }

    componentDidMount =()=>{
        if(!localStorage.getItem('datas')){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        }else{
            let art = JSON.parse(localStorage.getItem('datas')); 
                this.setState({datas:art});
        }
        
    }

    removeArticle = (index) => {
        console.log(index);
        const {datas} = this.state;
        this.setState({
            datas: datas.filter((d, i) => {
                return i!==index    
            })
        }, function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })
        
    }

    addArticle = (newArticle) => {
        if(this.state.datas.length !== 0){
        newArticle.id = (this.state.datas[this.state.datas.length -1].id +1)
            }
        this.setState({datas: [...this.state.datas, newArticle]},function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })         
    }


    render() { 
        return ( 
            <Fragment>
                <h1>Page d'administration</h1>
                <Ajout ajouter = {this.addArticle}/>
                <Articles deleteArticle = {this.removeArticle} articles = {this.state.datas} />
            </Fragment>
         );
    }
}
 
export default Adminx;