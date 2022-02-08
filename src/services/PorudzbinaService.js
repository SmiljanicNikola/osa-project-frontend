import axios from 'axios'

const PORUDZBINE_REST_API_URL = 'http://localhost:8080/api/porudzbine'
const PORUDZBINE_ELASTIC_REST_API_URL = 'http://localhost:8080/porudzbine6'

class PorudzbinaService{
    getPorudzbine(){
        return axios.get(PORUDZBINE_REST_API_URL);
    }
    getPorudzbinaById(porudzbinaId){
        return axios.get(PORUDZBINE_REST_API_URL + '/' + porudzbinaId);
    }
    getPorudzbineElastic(){
        return axios.get(PORUDZBINE_ELASTIC_REST_API_URL);
    }
    searchPorudzbinePoKomentaru(komentar){
        return axios.get(PORUDZBINE_ELASTIC_REST_API_URL + "/" + komentar);
    }
    /*searchPorudzbinePoOceni(ocena){
        return axios.get(PORUDZBINE_ELASTIC_REST_API_URL + "/" + ocena+'?minOcena');
    }*/
}

export default new PorudzbinaService();