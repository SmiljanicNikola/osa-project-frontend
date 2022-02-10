import React, {component} from 'react';
import axios from 'axios';
import { AuthenticationService } from "../services/AuthenticationService";
import { TokenService } from "../services/TokenService";
import '../App.css';
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
class HomeComponent extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username: '',
            ime:'',
            prezime:'',
            adresa : ''

        } 
    }
    componentDidMount(){
        this.state.username = AuthenticationService.getUsername();

        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                
            }
            
        };
        axios.get('http://localhost:8080/api/korisnici/username', config).then(
            res => {
                this.setState({
                    username: res.data.username,
                    accessToken:res.data.accessToken,
                    decoded_token: TokenService.decodeToken(res.data.accessToken),
                    if (decoded_token) {
                    TokenService.setToken(res.data.accessToken);
                    window.location.assign("/");
                    console.log(res.data.username);

                    }
                    
                });
            },
            err =>{
                console.log(err)
            }
        )
        axios.get(`http://localhost:8080/api/korisnici/username/${this.state.username}`).then( (res) =>{
            let korisnik = res.data;
            this.setState({
                ime: korisnik.ime,
                prezime: korisnik.prezime,
                username: korisnik.username,
                currentPassword: korisnik.password
            });
    
        });
        if(AuthenticationService.getRole == 'ROLE_PRODAVAC'){
        axios.get(`http://localhost:8080/api/prodavci/username/${this.state.username}`).then( (res) =>{
            let prodavac = res.data;
            this.setState({
                email: prodavac.email,
                adresa: prodavac.adresa,
                
            });
            console.log(this.state.idProdavca);
        });
    }
        else{
        axios.get(`http://localhost:8080/api/kupac/username/${this.state.username}`).then( (res) =>{
            let kupac = res.data;
            this.setState({
                adresa: kupac.adresa,
                
            });
        });
    }
    }

    preusmeri = (e) =>{
        this.props.history.push('/changeInfo');

    }

    preusmeriPromenaLozinke = (e) =>{
        this.props.history.push('/changePassword');

    }

    render(){
        return (
    <div className="body">
        <div className="container" style={{backgroundColor:' #101522'}}>
             <div className="card col-md-6 offset-md-3" >
                 <h2 className="text-center" style={{marginTop:'20px'}}>Logged user details:</h2>
                 
                <div className="text-center" style={{marginTop:"8px"}}>
                <div className="row">
                    <label style={{color:"black", fontWeight:"600"}}>Username : {AuthenticationService.getUsername()}</label>
                </div><br></br>
                <div className="row">
                    <label style={{color:"black", fontWeight:"600"}}>Role : {AuthenticationService.getRole()}</label>
                </div><br></br>
                <div className="row">
                    <label style={{color:"black", fontWeight:"600"}}>Ime : {this.state.ime}</label>
                </div><br></br>
                <div className="row">
                    <label style={{color:"black", fontWeight:"600"}}>Prezime : {this.state.prezime}</label>
                </div><br></br>
                <br></br>
                <button className="btn btn-warning" style={{marginBottom:'30px'}} onClick={this.preusmeri} >Promeni podatke</button>
                <button className="btn btn-danger" style={{marginBottom:'30px',marginLeft:'15px'}} onClick={this.preusmeriPromenaLozinke} >Promeni lozinku</button>
            </div>
        </div>    
        </div>   
    </div>  
        )
        }




    }
export default HomeComponent