import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { TokenService } from "../services/TokenService";
import { Button, Nav, Navbar } from "react-bootstrap";
import { AuthenticationService } from "../services/AuthenticationService";

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: AuthenticationService.getUsername(),
            role: AuthenticationService.getRole(),
        }
    }


    render(){
        return(
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="home" className="navbar-brand">  Home  </a></div>
                <div><a href="licnipodaci" className="navbar-brand">  LicniPodaci  </a></div>
                <div><a href="artikli" className="navbar-brand">  Artikli  </a></div>
                <div><a href="registracijakupca" className="navbar-brand">  RegistracijaKupac  </a></div>
                <div><a href="registracijaprodavca" className="navbar-brand">  RegistracijaProdavac  </a></div>
                <div><a href="svikorisnici" className="navbar-brand">  Users  </a></div>
                <div><a href="prodavci" className="navbar-brand">  Prodavci  </a></div>

                {TokenService.getToken() ? (
                <Button onClick={() => AuthenticationService.logout()} >Log out</Button>
                ) : (
                <Nav.Link as={Link} to="/login">
                Log in
                </Nav.Link>
                )}
               
               const role = AuthenticationService.getRole();
               console.log(role);
                
                 </nav>
                </header>
            </div>


        )
    }

}export default HeaderComponent