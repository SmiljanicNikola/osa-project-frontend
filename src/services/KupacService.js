import axios from 'axios'

const KUPCI_REST_API_URL = 'http://localhost:8080/api/kupci';
const KUPCI_REST_API_URL2 = 'http://localhost:8080/api/kupci/username';

class KupacService{
    getKupce(){
        return axios.get(KUPCI_REST_API_URL);
    }
    updateKupac(kupac, kupacUserName){
        return axios.put(KUPCI_REST_API_URL2+ '/' + kupacUserName, kupac);
    }

    



}


export default new KupacService();
