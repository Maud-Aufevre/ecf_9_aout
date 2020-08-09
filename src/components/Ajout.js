import React, { Component, Fragment } from 'react';

class Ajout extends Component {
    state = { }

    initArticle = {
        id: 1,
        auteur: "",
        image:"",
        pays:"",
        descritpion:"",
        recit:""
    }
   state = this.initArticle;

   modifChamp = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    envoyer = (e) => {
        e.preventDefault();
        this.props.ajouter(this.state);
    }

    render() { 
        const {auteur, image, pays, descritpion, recit} = this.state;

        return ( 
            <Fragment>
            {/* <!-- Button to Open the Modal --> */}
            <div className="text-right">
            <button type="button" className="btn btn-warning " data-toggle="modal" id="buttadd" data-target="#myModal">
            <i className = "fa fa-plus"></i> Ajouter un article
            </button>
            </div>
            <br></br>

            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Nouvel article</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="auteur">Auteur:</label>
                                    <input type="text" onChange={this.modifChamp} className="form-control" placeholder="Entrer auteur" id="auteur" name="auteur" value={auteur}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Photo:</label>
                                    <input type="img" onChange={this.modifChamp} className="form-control" placeholder="/img/colombie.jpg" id="image" name="image" value={image}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pays">Pays:</label>
                                    <input type="text" onChange={this.modifChamp} className="form-control" placeholder="Entrer pays" id="pays" name="pays" value={pays}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descritpion">Description:</label>
                                    <input type="text" onChange={this.modifChamp} className="form-control" placeholder="Entrer description" id="descritpion" name="descritpion" value={descritpion}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recit">Récit:</label>
                                    <input type="text" onChange={this.modifChamp} className="form-control" placeholder="Entrer recit" id="recit" name="recit" value={recit}/>
                                </div>
                                <button type="button" onClick= {this.envoyer} className="btn btn-primary btn-block" data-dismiss="modal">Soumettre</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
         );
    }
}
 
export default Ajout;