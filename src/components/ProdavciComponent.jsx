import React from 'react'
import { AuthenticationService } from "../services/AuthenticationService";
import KorisnikService from '../services/KorisnikService';
import ProdavacService from '../services/ProdavacService';



class ProdavciComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: AuthenticationService.getUsername(),
            prodavci:[],
        }
        this.viewArtikle = this.viewArtikle.bind(this);

    }

    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                
            }
            
        };
        ProdavacService.getProdavce().then((response) =>{
            this.setState({
                prodavci:response.data})         
            });
    }

    viewArtikle(id){
        this.props.history.push(`/viewArtikle/${id}`);

    }

    
   
    render(){
        return (
            
            <div>
                <h1 className="text-center"> Prodavci List </h1>
                {/* <button className="btn btn-primary" >Login</button>
                <button className="btn btn-primary" onClick={this.addUser}>Register</button> */}
                <div className="row">
                  
                </div>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Ime</td>
                            <td>Prezime</td>
                            <td>Username</td>
                            <td>Posluje Od</td>
                            <td>Email</td>
                            <td>Adresa</td>
                            <td>Naziv</td>
                            <td>Actions</td>

                           
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            this.state.prodavci.map(
                                prodavac=>
                                <tr key = {prodavac.id}>
                                    <td> {prodavac.korisnik.ime}</td>
                                    <td>{prodavac.korisnik.prezime}</td>
                                    <td>{prodavac.korisnik.username}</td>
                                    <td>{prodavac.poslujeOd}</td>
                                    <td>{prodavac.email}</td>
                                    <td>{prodavac.adresa}</td>
                                    <td>{prodavac.naziv}</td>
                                    <td>
                                        <button onClick={ () => this.viewArtikle(prodavac.id)} className="btn btn-info">Pregled artikala</button>
                                    
                                    </td>
                                </tr>
                            )

                        }
                    </tbody>

                </table>

            </div>
        )
    }

}

export default ProdavciComponent

