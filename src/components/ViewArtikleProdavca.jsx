/*import React from 'react'
import ArtikalService from '../services/ArtikalService'
import KorisnikService from '../services/KorisnikService'
import ProdavacService from '../services/ProdavacService'

import { AuthenticationService } from "../services/AuthenticationService";



class ViewArtikleProdavca extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            username: AuthenticationService.getUsername(),
            user: KorisnikService.getUserByUsername(AuthenticationService.getUsername()),

            artikli:[]
        }

        
        this.viewArtikal = this.viewArtikal.bind(this);
    }

    componentDidMount(){
        KorisnikService.getKorisnici().then...

        ArtikalService.getArtikle().then((response) =>{
            this.setState({artikli:response.data})
            user:KorisnikService.getUserByUsername(AuthenticationService.getUsername())
            this.setState({artikli: this.state.artikli.filter(artikli => artikli.prodavac.id == this.state.id)})
        });
        
    }

    viewArtikal(id){
        this.props.history.push(`view/${id}`);
    }

    
   
    render(){
        return (
            
            <div>
                <h1 className="text-center"> Lista Artikala izabranog prodavca:</h1>
                {/* <button className="btn btn-primary" >Login</button>
                <button className="btn btn-primary" onClick={this.addUser}>Register</button> }
                <div className="row">
                </div>
                <table className = "table table-striped">
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
                                korisniuk=>
                                <tr key = {artikal.id}>
                                    <td> {artikal.naziv}</td>
                                    <td>{artikal.opis}</td>
                                    <td>{artikal.cena}</td>
                                    <td>{artikal.putanjaSlike}</td>
                                    <td>
                                        <button onClick={ () => this.editArtikal(artikal.id)} className="btn btn-warning">Dodaj u korpu</button>

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

export default ViewArtikleProdavca

*/