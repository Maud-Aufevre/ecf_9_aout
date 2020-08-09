import React, {Fragment} from 'react';

const Articles = ({articles, deleteArticle}) => {
    return ( 
        <Fragment>
            <h1>Blog-Trotteurs / admin</h1>
            <h2 id="titreArticles">Liste des articles</h2>
    <table>
        <thead id="entetes">
            <tr>
                <th>Id</th>
                <th>Auteur</th>
                <th>Photo</th>
                <th>Pays</th>
                <th>Description</th>
                <th>Récit</th>
            </tr>
        </thead>
        <tbody id="articlesBlog">
            {
                articles ?
                articles.map((e,i) =>{
                    console.log(e.image)
                    return(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.auteur}</td>
                            <td>
                            <img src={e.image} width="120" alt={e.image}/>
                            </td>
                            <td>{e.pays}</td>
                            <td>{e.descritpion}</td>
                            <td>{e.recit}</td>

                            <td>
                    <button className = "btn btn-danger" onClick={() => {if(window.confirm("êtes vous sûr de vouloir supprimer cet article?")) {deleteArticle(i)};}}><i className="fa fa-trash">  Supprimer</i></button>
                            </td>
                    </tr>
                    )
                })
                : "aucun article"
            }
        </tbody>
    </table>
        </Fragment>
     );
}
 
export default Articles;