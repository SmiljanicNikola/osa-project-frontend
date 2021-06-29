import axios from 'axios'

const KORISNICI_REST_API_URL = 'http://localhost:8080/api/korisnici';
const KUPAC_REST_API_URL = 'http://localhost:8080/api/korisnici/kupac';
const PRODAVAC_REST_API_URL = 'http://localhost:8080/api/korisnici/prodavac';

class KorisnikService{
    getArtikle(){
        return axios.get(KORISNICI_REST_API_URL);
    }

    createKupac(kupac){
        return axios.post(KUPAC_REST_API_URL,kupac);
    }
    createProdavac(prodavac){
        return axios.post(PRODAVAC_REST_API_URL,prodavac);
    }

}


export default new KorisnikService();
