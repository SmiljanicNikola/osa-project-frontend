import axios from 'axios'

const ARTIKLI_REST_API_URL = 'http://localhost:8080/api/artikli';
const ARTIKLI_ELASTIC_REST_API_URL = 'http://localhost:8080/artiklii'

class ArtikalService{
    getArtikle(){
        return axios.get(ARTIKLI_REST_API_URL);
    }

    createArtikal(artikal){
        return axios.post(ARTIKLI_REST_API_URL,artikal);
    }

    getArtikalById(artikalId){
        return axios.get(ARTIKLI_REST_API_URL + '/' + artikalId)
    }

    updateArtikal(artikal, artikalId){
        return axios.put(ARTIKLI_REST_API_URL + '/' + artikalId, artikal);
    }

    deleteArtikal(artikalId){
        return axios.delete(ARTIKLI_REST_API_URL + '/' + artikalId);
    }
    getArtikliElastic(){
        return axios.get(ARTIKLI_ELASTIC_REST_API_URL);
    }
    searchArtiklePoNazivu(naziv){
        return axios.get(ARTIKLI_ELASTIC_REST_API_URL + "/" + naziv);
    }
    createArtikalElastic(artikal){
        return axios.post(ARTIKLI_ELASTIC_REST_API_URL,artikal);
    }
}


export default new ArtikalService();
