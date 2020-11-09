import React, { Component } from 'react';
import ProdottoDataService from '../service/ProdottoDataService.js';

class ListProdottiComponent extends Component {

    constructor(props) { //COSTRUTTORE DI CLASSE CHE ASSEGNA IL VALORE INIZIALE DI this.state;
        super(props)
        this.state = {
            prodotti: [],
            message: null
        }
        console.log(" constructor(props) {");
        console.log("il props e' " + props);
        console.log("il props e' " + this.props);
        this.refreshProdotti = this.refreshProdotti.bind(this) //(il this e' [object object])
        //this.refreshProdotti.bind(this) restituisce una nuova funzione, a cui a this faranno riferimento i
        // riferimenti this. Questo è un modo per salvare il valore corrente di this, che è nell'ambito
        // durante la chiamata al costruttore, in modo che possa essere utilizzato in seguito quando 
        //viene chiamata la funzione. 
        console.log("this.refreshProdotti = this.refreshProdotti.bind(this)" + this.refreshProdotti +" poi "+ this +" poi "+ this.refreshProdotti.bind(this));

        this.deleteProdottoClicked = this.deleteProdottoClicked.bind(this)
        this.addProdottoClicked = this.addProdottoClicked.bind(this)  //associazione appropriata e il metodo
        //  per gestire il clic del pulsante Aggiungi
        this.addProdottoClicked = this.addProdottoClicked.bind(this)
        this.refreshProdotti = this.refreshProdotti.bind(this)

    }


    componentDidMount() {
        console.log("  componentDidMount() {");
        //il documento e' stato caricato? (like document.ready)
        this.refreshProdotti();
    }

    refreshProdotti() {
       ProdottoDataService.retrieveAllProdotti()//HARDCODED 
            .then(//like success della chiamata ajax
                response => {//like result ajax
                    console.log("ProdottoDataService.retrieveAllProdotti()");
                    this.setState({ prodotti: response.data }) //costruisce oggetto, JS con le virgolette JSON. il .data 
                } //è necessario
            )
    }

    deleteProdottoClicked(id) {
        ProdottoDataService.deleteProdotto(id)
            .then(
                response => {
                    console.log(" deleteProdottoClicked...response => {")
                    this.setState({ message: `Delete of course ${id} Successful` }) //salva nello state il messaggio
                    this.refreshProdotti()
                }
            )
    
    }
    addProdottoClicked() {
        this.props.history.push(`/prodotti/-1`)
        console.log('this.props.history.push(`/prodotti/-1`)')
    }

    updateProdottoClicked(id) {
        
        console.log('update ' + id)
        this.props.history.push(`/prodotti/${id}`)
    }

    render() {

                                                                                                 console.log("ListProdottiComponent ---->render() {")
        return (
            <div className="container">
                <h3>Tutti i Prodotti</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                {console.log (this.props)} 
                     <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                {console.log (this.props)} {/*{prodotti: Array(0), message: null}*/}
                                {console.log (this.state)} {/*[]*/}{/* dopo diventa {prodotti: Array(12), message: "Delete of...}*/}
                                {console.log (this.state.prodotti)}    {/*[]*/}
                                {console.log (this.state.prodotti.map)} {/*ƒ map() { [native code] \*/}
                                <th>Prezzo</th>
                                <th>Descrizione</th>
                                <th>Quantita</th>
                                <th>Immagine</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.prodotti.map(/*Consentono di scorrere un elenco di elementi
                                 e di definire come deve essere visualizzato ciascun elemento. */
                                 
                                    prodotto =>
                                        <tr key={prodotto.id}>
                                            {console.log ('<tr key={prodotto.id}>')} 
                                           
                                            <td>{prodotto.nome}</td>
                                            <td>{prodotto.prezzo}</td>
                                            <td>{prodotto.descrizione}</td>
                                            <td>{prodotto.quantita}</td>
                                            <td>{prodotto.immagine}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteProdottoClicked(prodotto.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateProdottoClicked(prodotto.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                    <button className="btn btn-success" onClick={this.addProdottoClicked}>Add</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ListProdottiComponent;