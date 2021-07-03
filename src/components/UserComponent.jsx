import React from 'react'
import { AuthenticationService } from "../services/AuthenticationService";
import KorisnikService from '../services/KorisnikService';



class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: AuthenticationService.getUsername(),
            korisnici:[],
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
                korisnici:response.data})         
            });
    }

    editKorisnik(id){
        this.props.history.push(`/updateKorisnik/${id}`);
    }
    
   
    render(){
        return (
            
            <div>
                <h1 className="text-center"> Users List </h1>
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
                            <td>Actions</td>

                           
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            this.state.korisnici.map(
                                korisnik=>
                                <tr key = {korisnik.id}>
                                    <td> {korisnik.ime}</td>
                                    <td>{korisnik.prezime}</td>
                                    <td>{korisnik.username}</td>
                                    <td>
                                        <button onClick={ () => this.editKorisnik(korisnik.id)} className="btn btn-danger">Blokiraj</button>
                                    
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

export default UserComponent

