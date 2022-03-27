import React,{Component} from 'react';
import { AuthenticationService } from "../services/AuthenticationService";
import { TokenService } from "../services/TokenService";
import KorisnikService from "../services/KorisnikService";
import axios from 'axios'

class ChangePasswordComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            userName:"",
            korisnik : {},
            id : "",
            username: '',
            password:'',
            repeatPassword:'',
            currentPassword:'',
            currentPasswordCheck:'',
            ime:'',
            prezime:''

        }

        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeImeHandler = this.changeImeHandler.bind(this);
        this.changePrezimeHandler = this.changePrezimeHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.changerepeatPasswordHandler = this.changerepeatPasswordHandler.bind(this);
        this.changeCurrentPasswordCheckHandler = this.changeCurrentPasswordCheckHandler.bind(this);

    }

    componentDidMount(){
        const user = AuthenticationService.getUsername();
        this.state.userName = user;

        axios.get(`http://localhost:8080/api/korisnici/username/${this.state.userName}`).then( (res) =>{
            let korisnik = res.data;
            this.setState({
                ime: korisnik.ime,
                prezime: korisnik.prezime,
                username: korisnik.username,
                currentPassword: korisnik.password
            });
        });
    }

    updatePassword = (e) =>{
        e.preventDefault();
        let test ={repeatPassword: this.state.repeatPassword, password:this.state.password, currentPassword: this.state.currentPassword, currentPasswordCheck: this.state.currentPasswordCheck}
        console.log(test.password);
        console.log(test.currentPassword);
        if(test.repeatPassword != test.password){
            console.log('Lozinke se ne podudaraju');
        }
        else if(test.password.length<3){
            console.log('Lozinka je previse kratka')
        }
        else{
            let korisnik = {ime:this.state.ime, prezime:this.state.prezime, username:this.state.username, password:this.state.password}
            console.log(korisnik);  
            KorisnikService.updatePassword(korisnik,this.state.userName).then(res =>{
                this.props.history.push('/home');
            }) 
        }
    }

    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }
    
    changerepeatPasswordHandler = (event) =>{
        this.setState({repeatPassword: event.target.value});
    }

    changeImeHandler = (event) =>{
        this.setState({ime: event.target.value});
    }

    changePrezimeHandler = (event) =>{
        this.setState({prezime: event.target.value});
    }

    changeUsernameHandler = (event) =>{
        this.setState({username: event.target.value});
    }
    
    changeCurrentPasswordCheckHandler = (event) => {
        this.setState({currentPasswordCheck: event.target.value});
    }

    render() { 
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Change Password</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Current Password</label>
                                        <input placeholder="Current password" name="currentPassword" type="password" className="form-control"
                                            value={this.state.currentPasswordValue} onChange={this.changeCurrentPasswordCheckHandler}/>
                                    </div><br/>

                                    <div className="form-group">
                                        <label>New password</label>
                                        <input placeholder="New password" name="password" type="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div><br/>

                                    <div className="form-group">
                                        <label>Repeat password</label>
                                        <input placeholder="Repeat password" name="repeatPassword" type="password" className="form-control"
                                            value={this.state.repeatPassword} onChange={this.changerepeatPasswordHandler}/>
                                    </div>
                                    <br/>
                                    
                                    <button className="btn btn-success" onClick={this.updatePassword}>Confirm change</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default ChangePasswordComponent;