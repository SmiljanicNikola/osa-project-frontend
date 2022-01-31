import axios from 'axios'

const PORUDZBINE_REST_API_URL = 'http://localhost:8080/api/porudzbine'

class PorudzbinaService{
    getPorudzbine(){
        return axios.get(PORUDZBINE_REST_API_URL);
    }
    getPorudzbinaById(porudzbinaId){
        return axios.get(PORUDZBINE_REST_API_URL + '/' + porudzbinaId);
    }
}

export default new PorudzbinaService();