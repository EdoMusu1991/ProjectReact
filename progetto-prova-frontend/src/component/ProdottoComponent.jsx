import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProdottoDataService from '../service/ProdottoDataService.js';
import axios from 'axios'; 
  


class ProdottoComponent extends Component {

    constructor(props) {
        console.log('constructor(props) {');

        super(props)

        this.state = {
            id: this.props.match.params.id, //match = Questa funzione deve essere utilizzata 
            //per il rendering lato server. Corrisponde a un insieme di percorsi verso una posizione,
            // senza eseguire il rendering. Ha preso l'id del props di prima
            nome: '',
            prezzo:'',
            descrizione:'',
            quantita:'',
            immagine:'',
            selectedFile: null
        }

        console.log(' quantita:');
        this.onSubmit = this.onSubmit.bind(this) //lo rendo un metodo di classe
    }

    componentDidMount() {

        console.log('componentDidMount() {')

        // eslint-disable-next-line
        if (this.state.id == -1) {
            console.log('if (this.state.id == -1) {');

            return
        }

        ProdottoDataService.retrieveProdotto(this.state.id)
            .then(response => this.setState({
                
                id: response.data.id, //the response comes back with data
                nome: response.data.nome,
                prezzo: response.data.prezzo,
                descrizione: response.data.descrizione,
                quantita: response.data.quantita,
                immagine: response.data.immagine
            }
            ))
            console.log('quantita: response.data.quantita');

        }

        onSubmit(values) {
            console.log('onSubmit(values) {');
            
            let prodotto = {
                id: this.state.id, 
                nome: values.nome,
                prezzo: values.prezzo,
                descrizione: values.descrizione,
                quantita: values.quantita,
                immagine: values.immagine

            }
    
            if (this.state.id === -1) {
                console.log('if (this.state.id === -1) {');
                ProdottoDataService.createProdotto(prodotto)
                    .then(() => this.props.history.push('/prodotti'))
            } else {
                console.log(' } else {');
             
                ProdottoDataService.updateProdotto(prodotto)
                    .then(() => this.props.history.push('/prodotti'))
            }
    
            console.log(values);
        }
          // On file select (from the pop up) 
    onFileChange = event => { 
     
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
       
      }; 
       
      // On file upload (click the upload button) 
      onFileUpload = () => { 
       
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
       
        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData); 
      }; 
       
      // File content to be displayed after 
      // file upload is complete 
      fileData = () => { 
       
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h5>Scegli l'immagine </h5> 
            </div> 
          ); 
        } 
      }; 
        render() {
                console.log('render() {');
            let { id, nome,prezzo,descrizione,quantita,immagine } = this.state
    
            return (
                <div>
                    <h3>Prodotto</h3>
                    <div className="container">
                    {console.log (' <div className="container">' + this.props.todos)} 

                        <Formik
                        
                            initialValues={{ id,nome,prezzo,descrizione,quantita,immagine}}
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
                                            <label>Prezzo</label>
                                            <Field className="form-control" type="text" name="prezzo" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Descrizione</label>
                                            {console.log ('<label>Descrizione</label>')} 
                                            <Field className="form-control" type="text" name="descrizione" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Quantita'</label>
                                            <Field className="form-control" type="text" name="quantita" />
                                            {console.log ('<Field className="form-control" type="text" name="quantita" />')} 
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>File Immagine</label>
                                            
                                            {console.log ('<Field className="form-control" type="text" name="immagine" />')} 
                                            <input type="file" onChange={this.onFileChange} /> 
                                                     <button onClick={this.onFileUpload}> 
                                                        Upload! 
                                                    </button> 
                                                 
                                             {this.fileData()} 
                                                      
                                        <button className="btn btn-success" type="submit">Save</button>
                                        
                                        </fieldset>
                                        
                                            
                                    </Form>
                                )
                            }
                        </Formik>
    
                    </div>
                </div>
            )
        }
}

export default ProdottoComponent