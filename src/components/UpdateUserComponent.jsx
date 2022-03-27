import React, { Component } from 'react'
import KorisnikService from '../services/KorisnikService';


class UpdateUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ime: '',
            prezime: '',
            username: '',
            password:'',
        }

        this.changeImeHandler = this.changeImeHandler.bind(this);
        this.changePrezimeHandler = this.changePrezimeHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.updateUser = this.updateUser.bind(this);
}

componentDidMount(){
    KorisnikService.getUserById(this.state.id).then( (res) =>{
        let korisnik = res.data;
        this.setState({ime: korisnik.ime,
            prezime: korisnik.prezime,
            username: korisnik.username,
            password: korisnik.password
        });

    });
}

updateUser = (e) =>{
        e.preventDefault();
        let korisnik = {ime: this.state.ime, prezime: this.state.prezime, username: this.state.username,
        password: this.state.password
        }
        console.log('User => ' + JSON.stringify(korisnik));
        KorisnikService.updateUser(korisnik, this.state.id).then(res => {
            this.props.history.push('/licnipodaci');
        });
}

changeImeHandler= (event) =>{
    this.setState({ime: event.target.value});
}

changePrezimeHandler = (event) =>{
    this.setState({prezime: event.target.value});
}

changeUsernameHandler= (event) =>{
    this.setState({username: event.target.value});
}

changePasswordHandler= (event) =>{
    this.setState({password: event.target.value});
}

changePasswordHandler= (event) =>{
    this.setState({password: event.target.value});
}

cancel(){
    this.props.history.push('/licnipodaci');
}

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit user</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ime</label>
                                        <input placeholder="Ime" name="prezime" className="form-control"
                                            value={this.state.ime} onChange={this.changeImeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Prezime</label>
                                        <input placeholder="Prezime" name="prezime" className="form-control"
                                            value={this.state.prezime} onChange={this.changePrezimeHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input placeholder="Username" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUsernameHandler}/>      
                                    </div>
                                    
        
                                    <button className="btn btn-success" onClick={this.updateUser}>Izmeni</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UpdateUserComponent