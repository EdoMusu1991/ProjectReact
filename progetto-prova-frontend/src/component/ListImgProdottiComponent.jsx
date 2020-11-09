import React, { Component } from 'react';
import ProdottoDataService from '../service/ProdottoDataService.js';
import logo from '../logo.svg';
import '../App.css';
import Logo2 from '../img/ruotaFerrari.jpg';


class ListImgProdottiComponent extends Component {

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

        //  per gestire il clic del pulsante Aggiungi
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

    render() {

                                                                                                 console.log("ListProdottiComponent ---->render() {")
        return (
            <div className="container">
                <h3>Tutti i Prodotti</h3>
                <div className="App">
 
                                        
                     <table className="table">
                        <thead>
                            <tr>
                                <th>Immagine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.prodotti.map(/*Consentono di scorrere un elenco di elementi
                                 e di definire come deve essere visualizzato ciascun elemento. */
                                 
                                    prodotto =>
                                        <tr key={prodotto.id}>
                                            {console.log ('<tr key={prodotto.id}>')} 
                                            
                                            <td><u>{prodotto.nome} </u>{prodotto.descrizione}<a className="App-link"
                                                  href="http://localhost:3000/imgProdotti/"
                                                       target="_blank"
                                                 rel="noopener noreferrer"
                                                 ><img src={Logo2} />
          
                                        </a></td>
                                            
                                  </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ListImgProdottiComponent;