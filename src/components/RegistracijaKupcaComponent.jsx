import React, { Component } from 'react'
import KorisnikService from '../services/KorisnikService';


class RegistracijaKupcaComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ime: '',
            prezime: '',
            username: '',
            password: '',
            adresa: '',
        }
        this.changeImeHandler = this.changeImeHandler.bind(this);
        this.changePrezimeHandler = this.changePrezimeHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAdresaHandler = this.changeAdresaHandler.bind(this);
        
        this.saveKupac = this.saveKupac.bind(this);
    
}

saveKupac = (e) =>{
    e.preventDefault();
    let kupac = {ime: this.state.ime, prezime: this.state.prezime, username: this.state.username,
        password: this.state.password, adresa: this.state.adresa
        }
        console.log('Kupac => ' + JSON.stringify(kupac));

        KorisnikService.createKupac(kupac).then(res=>{
            this.props.history.push('/api/korisnici/kupac')
        });
}

changeImeHandler= (event) =>{
    this.setState({ime: event.target.value});
}

changePrezimeHandler= (event) =>{
    this.setState({prezime: event.target.value});
}

changeUsernameHandler= (event) =>{
    this.setState({username: event.target.value});
}

changePasswordHandler= (event) =>{
    this.setState({password: event.target.value});
}

changeAdresaHandler= (event) =>{
    this.setState({adresa: event.target.value});
}

cancel(){
    this.props.history.push('/korisnici');
}

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Registracija Kupaca</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ime:</label>
                                        <input placeholder="Ime" name="ime" className="form-control"
                                            value={this.state.ime} onChange={this.changeImeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Prezime:</label>
                                        <input placeholder="Prezime" name="prezime" className="form-control"
                                            value={this.state.prezime} onChange={this.changePrezimeHandler}/>

                                            
                                    </div>

                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input placeholder="Username" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUsernameHandler}/>

                                            
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Password" name="password" type="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler}/>

                                            
                                    </div>

                                    <div className="form-group">
                                        <label>Adresa:</label>
                                        <input placeholder="Adresa" name="adresa" className="form-control"
                                            value={this.state.adresa} onChange={this.changeAdresaHandler}/>
    
                                    </div>
                                  
                                    
                                    <button className="btn btn-success" onClick={this.saveKupac}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel}>   Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RegistracijaKupcaComponent