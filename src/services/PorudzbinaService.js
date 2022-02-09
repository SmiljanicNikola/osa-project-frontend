import axios from 'axios'

const PORUDZBINE_REST_API_URL = 'http://localhost:8080/api/porudzbine'
const PORUDZBINE_ELASTIC_REST_API_URL = 'http://localhost:8080/porudzbine7'
const PORUDZBINE_REST_API_URL2 = 'http://localhost:8080/api/porudzbine/username'
const PORUDZBINE_REST_API_PRISTIGLOST = 'http://localhost:8080/api/porudzbine/potvrdiPristiglost'



class PorudzbinaService{
    getPorudzbine(){
        return axios.get(PORUDZBINE_REST_API_URL);
    }
    getPorudzbineKupca(korisnikUsername){
        return axios.get(PORUDZBINE_REST_API_URL2 + "/" + korisnikUsername);
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
    potvrdiPristiglostPorudzbine(porudzbinaId){
        return axios.put(PORUDZBINE_REST_API_PRISTIGLOST + "/" + porudzbinaId)
    }
    recenzirajPorudzbinu(porudzbina, porudzbinaId){
        return axios.put(PORUDZBINE_REST_API_URL + "/" + porudzbinaId, porudzbina);
    }
}

export default new PorudzbinaService();