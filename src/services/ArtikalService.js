import axios from 'axios'

const ARTIKLI_REST_API_URL = 'http://localhost:8080/api/artikli';

class ArtikalService{
    getArtikle(){
        return axios.get(ARTIKLI_REST_API_URL);
    }

    createArtikle(artikal){
        return axios.post(ARTIKLI_REST_API_URL);
    }
}


export default new ArtikalService();
