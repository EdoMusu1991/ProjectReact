import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUsersComponent from "./ListUsersComponent.jsx";
import UserComponent from'./UserComponent.jsx';
import LoginComponent from'./LoginComponent.jsx';
import ListProdottiComponent from "./ListProdottiComponent.jsx";
import ProdottoComponent from'./ProdottoComponent.jsx';
import ListImgProdottiComponent from'./ListImgProdottiComponent.jsx';
import AdminComponent from'./AdminComponent.jsx';
 

import React from "react";



const AppRouter = () => {
   console.log ('const AppRouter = () => {' ); 

    return(
        <div>
            <Router>
                <div className="col-md-6 offset-3">
                    <Switch>

                            {console.log ('div className="col-md-6 offset-3"><Switch>' )} 
              
                        <Route path="/" exact component={LoginComponent} />
                                                                            {console.log ('<Route path="/" exact component={ListUsersComponent} />' )} 

                        <Route path="/admin" exact component={AdminComponent} />
                                                                                                     {console.log ('<Route path="/admin" exact component={AdminComponent} />' )} 

                        <Route path="/users" exact component={ListUsersComponent} />
                                                                                                             {console.log ('<Route path="/users" exact component={ListUsersComponent} />' )} 

                        <Route path="/users/:id" exact component={UserComponent} />
                                                                                                            {console.log ('<Route path="/users/:id" exact component={UserComponent} />' )} 

                        <Route path="/prodotti" exact component={ListProdottiComponent} />
                                                                                                                    {console.log ('<Route path="/prodotti" exact component={ListProdottiComponent} />' )} 

                        <Route path="/prodotti/:id" exact component={ProdottoComponent} />
                                                                                                                {console.log ('<Route path="/prodotti/:id" exact component={UserComponent} />' )} 

                        <Route path="/imgProdotti" exact component={ListImgProdottiComponent} />
                                                                                                                    {console.log ('<Route path="/imgProdotti" exact component={ListImgProdottiComponent} />' )}
                                     
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;