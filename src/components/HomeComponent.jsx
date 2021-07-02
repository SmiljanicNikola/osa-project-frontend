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
        Uloga:{AuthenticationService.getRole()};
        if(this.state.username){
            
            let user
            user = axios.get('http://localhost:8080/api/korisnici/username',);
            return(
                <h2> Hi {user.firstname} {user.lastname}</h2>
            )
        }
        let username;
        //username='milanm';
        return (
        
            <h3>Username:{AuthenticationService.getUsername()}<br></br>
                Role:{AuthenticationService.getRole()};
                <br></br></h3>
            
                )
        }




    }
export default HomeComponent