import React from 'react'
import ArtikalService from '../services/ArtikalService'
import KorisnikService from '../services/KorisnikService'
import ProdavacService from '../services/ProdavacService'

import { AuthenticationService } from "../services/AuthenticationService";



class ArtikalComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: AuthenticationService.getUsername(),
            user: KorisnikService.getUserByUsername(AuthenticationService.getUsername()),

            artikli:[]
        }

        this.addArtikal = this.addArtikal.bind(this);
        this.editArtikal = this.editArtikal.bind(this);
        this.deleteArtikal = this.deleteArtikal.bind(this);
        this.viewArtikal = this.viewArtikal.bind(this);
    }

    componentDidMount(){
        ArtikalService.getArtikle().then((response) =>{
            this.setState({artikli:response.data})
            user:KorisnikService.getUserByUsername(AuthenticationService.getUsername())
            this.setState({artikli: this.state.artikli.filter(artikli => artikli.prodavac.korisnik.username == AuthenticationService.getUsername())})
        });
        KorisnikService.getUserByUsername(this.state.username).then( (res) =>{
            let korisnik = res.data;
            this.setState({id: korisnik.id,
            });
    
        });
    }

    viewArtikal(id){
        this.props.history.push(`viewArtikal/${id}`);
    }

    deleteArtikal(id){
        ArtikalService.deleteArtikal(id).then(res => {
            this.setState({artikli: this.state.artikli.filter(artikli => artikli.id !== id)});
        });
    }
    editArtikal(id){
        this.props.history.push(`/updateArtikal/${id}`);
    }
    addArtikal(){
        this.props.history.push('/addArtikal');
    }

   
    render(){
        return (
            
            <div>
                <h1 className="text-center"> Lista Artikala od: {AuthenticationService.getUsername()}</h1>
               
                <table className = "table table-striped" style={{marginTop:'25px'}}>
                    <thead>
                        <tr>
                            <td>Naziv</td>
                            <td>Opis</td>
                            <td>Cena</td>
                            <td>Putanja Slike</td>
                            <td>Actions</td>

                           
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            this.state.artikli.map(
                                artikal=>
                                <tr key = {artikal.id}>
                                    <td> {artikal.naziv}</td>
                                    <td>{artikal.opis}</td>
                                    <td>{artikal.cena}</td>
                                    <td>{artikal.putanjaSlike}</td>
                                    <td>
                                        <button onClick={ () => this.editArtikal(artikal.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteArtikal(artikal.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewArtikal(artikal.id)} className="btn btn-info">View</button>

                                    </td>
                                </tr>
                            )

                        }
                    </tbody>

                </table>

            <button className="btn btn-success" onClick={this.addArtikal}>Dodaj Artikal</button>

            </div>
        )
    }

}

export default ArtikalComponent

