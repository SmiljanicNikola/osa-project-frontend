import axios from 'axios'

const KORISNICI_REST_API_URL = 'http://localhost:8080/api/korisnici';
const KORISNIKBLOCK_REST_API_URL = 'http://localhost:8080/api/korisnici/blokiraj';

const KUPAC_REST_API_URL = 'http://localhost:8080/api/korisnici/kupac';
const PRODAVAC_REST_API_URL = 'http://localhost:8080/api/korisnici/prodavac';

const KORISNICI_PO_USERNAME = 'http://localhost:8080/api/korisnici/username'
const UPDATE_PASSWORD = 'http://localhost:8080/api/korisnici/updatePassword/username'

class KorisnikService{
    getKorisnike(){
        return axios.get(KORISNICI_REST_API_URL);
    }

    createKupac(kupac){
        return axios.post(KUPAC_REST_API_URL,kupac);
    }

    createProdavac(prodavac){
        return axios.post(PRODAVAC_REST_API_URL,prodavac);
    }

    getUserById(korisnikId){
        return axios.get(KORISNICI_REST_API_URL + '/' + korisnikId)
    }

    blockUserById(user, korisnikId){
        return axios.put(KORISNIKBLOCK_REST_API_URL + '/' + korisnikId, user);
    }

    updateUser(user, korisnikId){
        return axios.put(KORISNICI_REST_API_URL + '/' + korisnikId, user);
    }

    updateUserUserName(user, korisnikUserName){
        return axios.put(KORISNICI_PO_USERNAME + '/' + korisnikUserName, user);
    }

    getUserByUsername(username){
        return axios.get(KORISNICI_PO_USERNAME + '/' + username)
    }

    updatePassword(user, korisnikUserName){
        return axios.put(UPDATE_PASSWORD + '/' + korisnikUserName, user);
    }

}

export default new KorisnikService();
