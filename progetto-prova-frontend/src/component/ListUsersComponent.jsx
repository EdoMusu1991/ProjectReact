import React, { Component } from 'react';
import UserDataService from '../service/UserDataService.js';

class ListUsersComponent extends Component {

    constructor(props) { //COSTRUTTORE DI CLASSE CHE ASSEGNA IL VALORE INIZIALE DI this.state;
        super(props)
        this.state = {
            users: [],
            message: null
        }
        console.log(" constructor(props) {");
        console.log("il props e' " + props);
        console.log("il props e' " + this.props);
        this.refreshUsers = this.refreshUsers.bind(this) //(il this e' [object object])
        //this.refreshUsers.bind(this) restituisce una nuova funzione, a cui a this faranno riferimento i
        // riferimenti this. Questo è un modo per salvare il valore corrente di this, che è nell'ambito
        // durante la chiamata al costruttore, in modo che possa essere utilizzato in seguito quando 
        //viene chiamata la funzione. 
        console.log("this.refreshUsers = this.refreshUsers.bind(this)" + this.refreshUsers +" poi "+ this +" poi "+ this.refreshUsers.bind(this));

        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.addUserClicked = this.addUserClicked.bind(this)  //associazione appropriata e il metodo
        //  per gestire il clic del pulsante Aggiungi
        this.addUserClicked = this.addUserClicked.bind(this)
        this.refreshUsers = this.refreshUsers.bind(this)

    }


    componentDidMount() {
        console.log("  componentDidMount() {");
        //il documento e' stato caricato? (like document.ready)
        this.refreshUsers();
    }

    refreshUsers() {
       UserDataService.retrieveAllUsers()//HARDCODED 
            .then(//like success della chiamata ajax
                response => {//like result ajax
                    console.log("UserDataService.retrieveAllUsers()");
                    this.setState({ users: response.data }) //costruisce oggetto, JS con le virgolette JSON. il .data 
                } //è necessario
            )
    }

    deleteUserClicked(id) {
        UserDataService.deleteUser(id)
            .then(
                response => {
                    console.log(" deleteUserClicked...response => {")
                    this.setState({ message: `Delete of course ${id} Successful` }) //salva nello state il messaggio
                    this.refreshUsers()
                }
            )
    
    }
    addUserClicked() {
        this.props.history.push(`/users/-1`)
        console.log('this.props.history.push(`/users/-1`)')
    }

    updateUserClicked(id) {
        
        console.log('update ' + id)
        this.props.history.push(`/users/${id}`)
    }

    render() {

                                                                                                 console.log("ListUsersComponent ---->render() {")
        return (
            <div className="container">
                <h3>All Users</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                {console.log (this.props)} 
                     <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                {console.log (this.props)} {/*{users: Array(0), message: null}*/}
                                {console.log (this.state)} {/*[]*/}{/* dopo diventa {users: Array(12), message: "Delete of...}*/}
                                {console.log (this.state.users)}    {/*[]*/}
                                {console.log (this.state.users.map)} {/*ƒ map() { [native code] \*/}
                                <th>Cognome</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Ruolo</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(/*Consentono di scorrere un elenco di elementi
                                 e di definire come deve essere visualizzato ciascun elemento. */
                                 
                                    user =>
                                        <tr key={user.id}>
                                            {console.log ('<tr key={user.id}>')} 
                                           
                                            <td>{user.nome}</td>
                                            <td>{user.cognome}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.ruolo}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateUserClicked(user.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                    <button className="btn btn-success" onClick={this.addUserClicked}>Add</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ListUsersComponent;