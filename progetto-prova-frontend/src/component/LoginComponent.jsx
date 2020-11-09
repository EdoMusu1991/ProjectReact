import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataService from '../service/UserDataService.js';


class LoginComponent extends Component {

    constructor(props) { //COSTRUTTORE DI CLASSE CHE ASSEGNA IL VALORE INIZIALE DI this.state;
        super(props)
        this.state = {
            email:'',
            password:'',
            message: null
        }
        console.log(" constructor(props) {");
        this.onSubmit = this.onSubmit.bind(this) //lo rendo un metodo di classe


    }
    componentDidMount() {
        console.log("  componentDidMount() {");

    }

    onSubmit(values) {
            console.log('onSubmit(values) {');
            
            let user = {
                id:0,
                nome: null,
                password:null,
                email: values.email,
                password: values.password,
                ruolo: null,

            }            
                console.log('password: values.password');
             
                UserDataService.loginUser(user).then(
                    response => {
                         if(response.data.nome ==null){

                            this.setState({ message: `Riprovare` }) 
                             }
                            else  {

                                    if(response.data.ruolo === "admin" ){ 

                                this.props.history.push('/admin')
                             console.log('this.props.history.push(\'/admin\')');
                                }
                                 else{this.props.history.push('/imgProdotti')}
                            }
                        }
                ) 
      }           
           
      

    render() {
                console.log('render() {');
            let { email,password } = this.state
    
            return (
                <div>
                    <h3>Login</h3>
                    <div className="container">
                    {console.log (' <div className="container">' + this.props.todos)} 
                    {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    {console.log ('{this.state.message && <div class' + this.props.todos)} 

                        <Formik
                        
                            initialValues={{ email,password}}
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
                                            <label>Email</label>
                                            {console.log ('<label>Email</label>')} 
                                            <Field className="form-control" type="text" name="email" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Password</label>
                                            <Field className="form-control" type="text" name="password" />
                                            {console.log ('<Field className="form-control" type="text" name="password" />')} 
                                        </fieldset>
                                        <button className="btn btn-success" type="submit">Login</button>
                                    </Form>
                                )
                            }
                        </Formik>
    
                    </div>
                </div>
            )
     }
}

export default LoginComponent;