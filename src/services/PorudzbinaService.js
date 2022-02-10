import axios from 'axios'

const PORUDZBINE_REST_API_URL = 'http://localhost:8080/api/porudzbine'
const PORUDZBINE_ELASTIC_REST_API_URL = 'http://localhost:8080/porudzbine4'
const PORUDZBINE_ELASTIC_REST_API_URL_PO_KUPCU = 'http://localhost:8080/porudzbine4/kupac'
const PORUDZBINE_REST_API_URL2 = 'http://localhost:8080/api/porudzbine/username'
const PORUDZBINE_REST_API_PRISTIGLOST = 'http://localhost:8080/api/porudzbine/potvrdiPristiglost'
const PORUDZBINE_ELASTIC_REST_API_URL_ID = 'http://localhost:8080/porudzbine4/id'
class PorudzbinaService{
    getPorudzbine(){
        return axios.get(PORUDZBINE_REST_API_URL);
    }
    getPorudzbineKupca(korisnikUsername){
        return axios.get(PORUDZBINE_REST_API_URL2 + "/" + korisnikUsername);
    }
    getPorudzbineKupcaElastic(kupacId){
        return axios.get(PORUDZBINE_ELASTIC_REST_API_URL_PO_KUPCU + "/" + kupacId);

    }
    getPorudzbinaById(porudzbinaId){
        return axios.get(PORUDZBINE_REST_API_URL + '/' + porudzbinaId);
    }
    getElasticPorudzbinaById(porudzbinaId){
        return axios.get(PORUDZBINE_ELASTIC_REST_API_URL_ID + '/' + porudzbinaId);
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
    createPorudzbinaElastic(artikal){
        return axios.post(PORUDZBINE_ELASTIC_REST_API_URL,artikal);
    }
}

export default new PorudzbinaService();