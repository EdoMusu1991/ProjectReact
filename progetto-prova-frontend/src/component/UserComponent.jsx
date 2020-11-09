import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataService from '../service/UserDataService.js';


class UserComponent extends Component {

    constructor(props) {
        console.log('constructor(props) {');

        super(props)

        this.state = {
            id: this.props.match.params.id, //match = Questa funzione deve essere utilizzata 
            //per il rendering lato server. Corrisponde a un insieme di percorsi verso una posizione,
            // senza eseguire il rendering. Ha preso l'id del props di prima
            nome: '',
            cognome:'',
            email:'',
            password:'',
            ruolo:''
        }

        console.log(' password:');
        this.onSubmit = this.onSubmit.bind(this) //lo rendo un metodo di classe
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            console.log('if (this.state.id == -1) {');

            return
        }

        UserDataService.retrieveUser(this.state.id)
            .then(response => this.setState({
                
                id: response.data.id, //the response comes back with data
                nome: response.data.nome,
                cognome: response.data.cognome,
                email: response.data.email,
                password: response.data.password,
                ruolo: response.data.ruolo
            }
            ))
            console.log('password: response.data.password');

        }

        onSubmit(values) {
            console.log('onSubmit(values) {');
            
            let user = {
                id: this.state.id, 
                nome: values.nome,
                cognome: values.cognome,
                email: values.email,
                password: values.password,
                ruolo: values.ruolo

            }
    
            if (this.state.id === -1) {
                console.log('if (this.state.id === -1) {');
                UserDataService.createUser(user)
                    .then(() => this.props.history.push('/users'))
            } else {
                console.log(' } else {');
             
                UserDataService.updateUser(user)
                    .then(() => this.props.history.push('/users'))
            }
    
            console.log(values);
        }
        render() {
                console.log('render() {');
            let { id, nome,cognome,email,password,ruolo } = this.state
    
            return (
                <div>
                    <h3>User</h3>
                    <div className="container">
                    {console.log (' <div className="container">' + this.props.todos)} 

                        <Formik
                        
                            initialValues={{ id,nome,cognome,email,password,ruolo}}
                            onSubmit={this.onSubmit}
                            enableReinitialize={true}
                            
                        >
                            {
                                (props) => (
                                    <Form>
                                        {console.log ('(props) => (<Form>')} 
                                        <ErrorMessage name="description" component="div"
                                            className="alert alert-warning" />
                                        <fieldset className="form-group">
                                        {console.log ('<fieldset className="form-group">')} 
                                            <label>Id</label>
                                            <Field className="form-control" type="text" name="id" disabled />
                                        </fieldset>
                                        <fieldset className="form-group">
                                        {console.log ('<fieldset className="form-group">')} 
                                            <label>Nome</label>
                                            <Field className="form-control" type="text" name="nome" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                        {console.log ('<fieldset className="form-group">')} 
                                            <label>Cognome</label>
                                            <Field className="form-control" type="text" name="cognome" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Email</label>
                                            {console.log ('<label>Email</label>')} 
                                            <Field className="form-control" type="text" name="email" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Password</label>
                                            <Field className="form-control" type="text" name="password" />
                                            {console.log ('<Field className="form-control" type="text" name="password" />')} 
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Ruolo</label>
                                            <Field className="form-control" type="text" name="ruolo" />
                                            {console.log ('<Field className="form-control" type="text" name="ruolo" />')} 
                                        </fieldset>
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                )
                            }
                        </Formik>
    
                    </div>
                </div>
            )
        }
}

export default UserComponent