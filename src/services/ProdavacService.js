import axios from 'axios'

const PRODAVCI_REST_API_URL = 'http://localhost:8080/api/prodavci';
const KORISNIKBLOCK_REST_API_URL = 'http://localhost:8080/api/korisnici/blokiraj';

const KUPAC_REST_API_URL = 'http://localhost:8080/api/korisnici/kupac';
const PRODAVAC_REST_API_URL = 'http://localhost:8080/api/korisnici/prodavac';

const KORISNICI_PO_USERNAME = 'http://localhost:8080/api/korisnici/username'
class ProdavacService{
    getProdavce(){
        return axios.get(PRODAVCI_REST_API_URL);
    }

    



}


export default new ProdavacService();
