import axios from 'axios'

const ARTIKLI_REST_API_URL = 'http://localhost:8080/api/artikli';

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
}


export default new ArtikalService();
