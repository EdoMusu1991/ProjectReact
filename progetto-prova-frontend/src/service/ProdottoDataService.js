import axios from 'axios'

const CONTROLLER_API_URL = 'http://localhost:8080'
const USER_API_URL = `${CONTROLLER_API_URL}/prodotto` //costante url dove troverò gli utenti

class ProdottoDataService {

    retrieveAllProdotti() {
                                                                                        console.log("class ProdottoDataService { retrieveAllProdotti() {");
        return axios.get(`${USER_API_URL}/allProdotti`);
    }

    deleteProdotto(id) {
                                                                                         console.log('deleteProdotto(id) {')
       return axios.delete(`${USER_API_URL}/delete/${id}`);
    } 

    retrieveProdotto(id) {
                                                                    console.log(' retrieveProdotto( id) {')
        return axios.get(`${USER_API_URL}/prodotti/${id}`);
    }

    updateProdotto(prodotto) {
                                                                 console.log('updateProdotto(prodotto) {')
    return axios.put(`${USER_API_URL}/update/`, prodotto);
    }

    createProdotti(prodotto) {
                                                                 console.log('createProdotti(prodotto)')
        return axios.post(`${USER_API_URL}/add/`, prodotto);
    }




}
export default new ProdottoDataService()