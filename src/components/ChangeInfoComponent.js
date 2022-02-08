import React,{Component} from 'react';
import { AuthenticationService } from "../services/AuthenticationService";
import { TokenService } from "../services/TokenService";
import KorisnikService from "../services/KorisnikService";
import axios from 'axios'
import ProdavacService from '../services/ProdavacService';
import KupacService from '../services/KupacService';

class ChangeInfoComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            korisnik : {},
            username: '',
            password:'',
            repeatPassword:'',
            currentPassword:'',
            currentPasswordCheck:'',
            ime:'',
            prezime:'',
            adresa:'',
            rola: ''

        }
        this.changeImeHandler = this.changeImeHandler.bind(this);
        this.changePrezimeHandler = this.changePrezimeHandler.bind(this);
        this.changeAdresaHandler = this.changeAdresaHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    }
    componentDidMount(){
        const user = AuthenticationService.getUsername();
        const role = AuthenticationService.getRole();
        this.state.userName = user;
        this.state.rola = role;

    
        axios.get(`http://localhost:8080/api/korisnici/username/${this.state.userName}`).then( (res) =>{
            let korisnik = res.data;
            this.setState({
                ime: korisnik.ime,
                prezime: korisnik.prezime,
                username: korisnik.username,
                password: korisnik.password
            });
    
        });
        if(this.state.rola == 'ROLE_PRODAVAC'){
        axios.get(`http://localhost:8080/api/prodavci/username/${this.state.userName}`).then( (res) =>{
            let prodavac = res.data;
            this.setState({
                idProdavca: prodavac.id,
                email: prodavac.email,
                adresa: prodavac.adresa,
                naziv: prodavac.adresa
            });
            console.log('ODRADJEN PRODAVAC GETOVANJE');
        });
    }else{
        axios.get(`http://localhost:8080/api/kupci/username/${this.state.userName}`).then( (res) =>{
            let kupac = res.data;
            this.setState({
                idKupca: kupac.id,
                adresa: kupac.adresa,
            });
            console.log('ODRADJEN KUPAC GETOVANJE');
        });
    }
    console.log(this.state.rola)
    }

     updateInfo = (e) =>{
        e.preventDefault();
    
            let korisnik = {ime:this.state.ime, prezime:this.state.prezime, username:this.state.username}
            console.log(korisnik);  
            KorisnikService.updateUserUserName(korisnik,this.state.userName).then(res =>{
                this.props.history.push('/home');
            })
            if(this.state.rola == "ROLE_PRODAVAC"){
                let prodavac = {adresa:this.state.adresa, email:this.state.email}
                ProdavacService.updateProdavac(prodavac, this.state.userName).then(res => {
                    this.props.history.push('/home');
                })
            }else if(this.state.rola == "ROLE_KUPAC"){
                let kupac = {adresa:this.state.adresa}
                KupacService.updateKupac(kupac, this.state.userName).then(res => {
                    this.props.history.push('/home');
                })
            }
            
        
    }
    changeImeHandler = (event) =>{
        this.setState({ime: event.target.value});
    }
    changePrezimeHandler = (event) =>{
        this.setState({prezime: event.target.value});
    }
    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changeAdresaHandler = (event) =>{
        this.setState({adresa: event.target.value});
    }
    render() { 
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Promena Licnih podataka</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ime</label>
                                        <input placeholder="Ime" name="ime" type="text" className="form-control"
                                            value={this.state.ime} onChange={this.changeImeHandler}/>
                                    </div><br></br>
                                    <div className="form-group">
                                        <label>Prezime</label>
                                        <input placeholder="Prezime" name="prezime" type="text" className="form-control"
                                            value={this.state.prezime} onChange={this.changePrezimeHandler}/>
                                    </div><br></br>
                                    <div className="form-group">
                                        <label>Adresa</label>
                                        <input placeholder="Adresa" name="adresa" type="text" className="form-control"
                                            value={this.state.adresa} onChange={this.changeAdresaHandler}/>
                                    </div><br></br>
                                    {this.state.rola=="ROLE_PRODAVAC" ? (
                                        <div>
                                            <div className="form-group">
                                                <label>Adresa</label>
                                                <input placeholder="Email" name="email" type="text" className="form-control"
                                                    value={this.state.email} onChange={this.changeEmailHandler}/><br></br>
                                            </div>
                                        </div>
                                    ) : (<div>

                                    </div>
                                    ) }
                                    
                                    <button className="btn btn-success" onClick={this.updateInfo}>Confirm change</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default ChangeInfoComponent;