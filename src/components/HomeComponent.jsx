import React, {component} from 'react';
import axios from 'axios';
import { AuthenticationService } from "../services/AuthenticationService";
import { TokenService } from "../services/TokenService";




class HomeComponent extends React.Component{

    state = {};
    componentDidMount(){

        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                
            }
            
        };
        axios.get('http://localhost:8080/api/korisnici/username', config).then(
            res => {
                this.setState({
                    username: res.data.username,
                    accessToken:res.data.accessToken,
                    decoded_token: TokenService.decodeToken(res.data.accessToken),
                    if (decoded_token) {
                    TokenService.setToken(res.data.accessToken);
                    window.location.assign("/");
                    console.log(res.data.username);

                    }
                    
                });
            },
            err =>{
                console.log(err)
            }
        )
    }

    render(){
        return (
        <div>
             <div className="card col-md-6 offset-md-3">
                 <h2 className="text-center">Logged user details:</h2>
                <div className="card-body">
                <div className="row">
                    <label style={{color:"black"}}>Username : {AuthenticationService.getUsername()}</label>
                </div><br></br>
                <div className="row">
                    <label style={{color:"black"}}>Role : {AuthenticationService.getRole()}</label>
                </div><br></br>
               
                <br></br>
               
            </div>
        </div>
    </div>    
        )
        }




    }
export default HomeComponent