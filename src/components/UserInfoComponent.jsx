import React from 'react'
import { AuthenticationService } from "../services/AuthenticationService";
import KorisnikService from '../services/KorisnikService';



class UserInfoComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: AuthenticationService.getUsername(),
            korisnici:[],
            korisnici2:[],
        }
        this.editKorisnik = this.editKorisnik.bind(this);

    }

    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                
            }
            
        };
        KorisnikService.getKorisnike().then((response) =>{
            this.setState({
                korisnici2:response.data})
                this.setState({ korisnici2: this.state.korisnici2.filter(korisnici2 => korisnici2.username == AuthenticationService.getUsername())});
            });
    }

    editKorisnik(id){
        this.props.history.push(`/updateKorisnik/${id}`);
    }
    
   
    render(){
        return (
            
            <div>
                <h1 className="text-center"> Lista Korisnika </h1>
                {/* <button className="btn btn-primary" >Login</button>
                <button className="btn btn-primary" onClick={this.addUser}>Register</button> */}
                <div className="row">
                  var Uloga ={AuthenticationService.getRole()};
                </div>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Ime</td>
                            <td>Prezime</td>
                            <td>Username</td>
                            <td>Actions</td>

                           
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            this.state.korisnici2.map(
                                korisnik=>
                                <tr key = {korisnik.id}>
                                    <td> {korisnik.ime}</td>
                                    <td>{korisnik.prezime}</td>
                                    <td>{korisnik.username}</td>
                                    <td>
                                        <button onClick={ () => this.editKorisnik(korisnik.id)} className="btn btn-info">Update</button>
                                    
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

export default UserInfoComponent

