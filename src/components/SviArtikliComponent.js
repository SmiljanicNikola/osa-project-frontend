import React, {Component} from 'react'
import ArtikalService from '../services/ArtikalService'
import {AuthenticationService} from "../services/AuthenticationService";
import KorisnikService from '../services/KorisnikService';

class SviArtikliComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username:AuthenticationService.getUsername(),
            user: KorisnikService.getUserByUsername(AuthenticationService.getUsername()),
            artikli: []
        }
    }

    componentDidMount(){
        ArtikalService.getArtikle().then((response ) => {
            this.setState({artikli:response.data})

        });
        KorisnikService.getUserByUsername(this.state.username).then( (res) => {
            let korisnik = res.data;
            this.setState({id: korisnik.id});
        })
    }

    render() { 
        return (
            <div>
                <h1 className="text-center"> Lista svih artikala</h1>
                <table className="table table-striped">
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
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>       
        );
    }
}
 
export default SviArtikliComponent;