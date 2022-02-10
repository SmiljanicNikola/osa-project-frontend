import axios from 'axios'

const PRODAVCI_REST_API_URL = 'http://localhost:8080/api/prodavci';
const KORISNIKBLOCK_REST_API_URL = 'http://localhost:8080/api/korisnici/blokiraj';
const PRODAVCI_REST_API_URL2 = 'http://localhost:8080/api/prodavci/username';

class ProdavacService{
    getProdavce(){
        return axios.get(PRODAVCI_REST_API_URL);
    }
    updateProdavac(prodavac, prodavacUserName){
        return axios.put(PRODAVCI_REST_API_URL2+ '/' + prodavacUserName, prodavac);
    }

}


export default new ProdavacService();
