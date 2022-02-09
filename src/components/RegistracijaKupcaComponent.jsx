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
            repeatPassword: '',
        }
        this.changeImeHandler = this.changeImeHandler.bind(this);
        this.changePrezimeHandler = this.changePrezimeHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAdresaHandler = this.changeAdresaHandler.bind(this);
        this.changerepeatPasswordHandler = this.changerepeatPasswordHandler.bind(this);

        this.saveKupac = this.saveKupac.bind(this);
    
}

saveKupac = (e) =>{
    e.preventDefault();
    let test={repeatPassword:this.state.repeatPassword, password:this.state.password, ime: this.state.ime,
    prezime: this.state.prezime, adresa: this.state.adresa}
    
    if(test.repeatPassword != test.password){
        console.log('Lozinke se ne podudaraju!');
    }
    else if(test.password.length < 3){
        console.log('Lozinka je previse kratka!')
    }
    else if(test.ime.length < 1){
        console.log('Polje ime je obavezno!')
    }
    else if(test.prezime.length < 1){
        console.log('Polje prezime je obavezno!')
    }
    else if(test.adresa.length < 1){
        console.log('Polje adresa je obavezno!')
    }
    else{
    let kupac = {ime: this.state.ime, prezime: this.state.prezime, username: this.state.username,
        password: this.state.password, adresa: this.state.adresa
        }
        console.log('Kupac => ' + JSON.stringify(kupac));

        KorisnikService.createKupac(kupac).then(res=>{
            this.props.history.push('/api/korisnici/kupac')
        });
    }
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

changerepeatPasswordHandler= (event) =>{
    this.setState({repeatPassword: event.target.value});
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
                            <h3 className="text-center" style={{marginTop:'15px'}}>Registracija Kupaca</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" style={{marginTop:'15px'}}>
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
                                        <label>Ponovljen password:</label>
                                        <input placeholder="Ponovljen password" name="repeatPassword" type="password" className="form-control"
                                            value={this.state.repeatPassword} onChange={this.changerepeatPasswordHandler}/>
    
                                    </div>


                                    <div className="form-group">
                                        <label>Adresa:</label>
                                        <input placeholder="Adresa" name="adresa" className="form-control"
                                            value={this.state.adresa} onChange={this.changeAdresaHandler}/>
    
                                    </div>
                            
                                    <center>
                                        <button className="btn btn-success" onClick={this.saveKupac} style={{marginTop:'20px'}}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginTop:'20px', marginLeft:'10px'}}>   Cancel</button>
                                    </center>
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