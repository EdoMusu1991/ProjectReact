import React, { Component } from 'react';
import UserDataService from '../service/UserDataService.js';

class AdminComponent extends Component {

    constructor(props) { //COSTRUTTORE DI CLASSE CHE ASSEGNA IL VALORE INIZIALE DI this.state;
        super(props)
        this.state = {

            message: null
        }
        console.log(" constructor(props) {");

        this.listProdottiClicked = this.listProdottiClicked.bind(this)
        this.listUsersClicked = this.listUsersClicked.bind(this)  //associazione appropriata e il metodo
        //  per gestire il clic del pulsante Aggiungi

    }


    componentDidMount() {
        console.log("  componentDidMount() {");
        //il documento e' stato caricato? (like document.ready)
 
    }



    listProdottiClicked(id) {
        this.props.history.push(`/prodotti`)
        console.log('this.props.history.push(`/prodotti)')

            
    
    }
    listUsersClicked() {
        this.props.history.push(`/users`)
        console.log('this.props.history.push(`/users)')
    }



    render() {

                                                                                                 console.log("ListUsersComponent ---->render() {")
        return (
            <div className="container">
                <h3>Benvenuto Admin! Scegli la tabella</h3>
                <div className="row">
                    <button className="btn btn-success" onClick={this.listProdottiClicked}>Lista Prodotti</button>
             </div>
                    <div className="row">
                    <button className="btn btn-success" onClick={this.listUsersClicked}>Lista Users</button>
                    </div>
            </div>
            
            
        )
    }
}

export default AdminComponent;