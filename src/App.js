import logo from './logo.svg';
import './App.css';
import ArtikalComponent from './components/ArtikalComponent';
import React, {Component} from 'react';
import RegistracijaKupcaComponent from './components/RegistracijaKupcaComponent';
import RegistracijaProdavcaComponent from './components/RegistracijaProdavcaComponent';
import Login from './components/Login';
import AddArtikalComponent from './components/AddArtikalComponent';
import UpdateArtikalComponent from './components/UpdateArtikalComponent';
import ViewArtikalComponent from './components/ViewArtikalComponent';
import {AuthenticationService} from './services/AuthenticationService';
import HomeComponent from './components/HomeComponent';
import UserInfoComponent from './components/UserInfoComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import {PrivateRoute} from "./components/tasks/PrivateRoute";
import UserComponent from './components/UserComponent';
import ProdavciComponent from './components/ProdavciComponent';
import ViewArtikleProdavca from './components/ViewArtikleProdavca';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlockUserComponent from './components/BlockUserComponent';
import SviArtikliComponent from './components/SviArtikliComponent';
import SvePorudzbineComponent from './components/porudzbina/PorudzbinaComponent';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import SveElasticPorudzbineComponent from './components/porudzbina/PorudzbinaElasticComponent';
import ChangePasswordComponent from './components/ChangePasswordComponent';
import ChangeInfoComponent from './components/ChangeInfoComponent';
import SviElasticArtikliComponent from './components/ArtikalElasticComponents';
import PorudzbineKupcaComponent from './components/porudzbina/PorudzbineKupcaComponent';
import RecenzirajPorudzbinuComponent from './components/porudzbina/RecenzirajPorudzbinuComponent';
import ArtikliProdavcaElastic from './components/ArtikliProdavcaElastic';
import UpdateArtikalElasticComponent from './components/UpdateArtikalElasticComponent';
import ElasticPorudzbineKupcaComponent from './components/porudzbina/ElasticPorudzbineKupcaComponent';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userRole:'',
      userName: null
    };
  }

  componentDidMount() {
    const role = AuthenticationService.getRole();
    const userNameUlogovanog = AuthenticationService.getUsername();

    if (role) {
      this.setState({
        userName: userNameUlogovanog,
        userRole: role
      });
    }
    console.log('Samo Role '+role);
  }


  render(){

    const {userRole} = this.state;
    console.log('Samo userRole '+userRole);

  return (
    <div>
        <Router>
              
              <Navbar />
              
                <div className="container">
                    <Switch> 
                          
                          <Route path="/registracijakupca" component={RegistracijaKupcaComponent}></Route>
                          <Route path="/registracijaprodavca" component={RegistracijaProdavcaComponent}></Route>
                          <Route path="/login" component={Login}></Route>
                          <Route path="/viewArtikle/:id" component={ViewArtikleProdavca}></Route>
                          <Route path="/viewArtikal/:id" component={ViewArtikalComponent}></Route>
                          <Route path="/updateKorisnik/:id" component={UpdateUserComponent}></Route>
                          <Route path="/porudzbine" component={SvePorudzbineComponent}></Route>
                          <Route path="/elasticPorudzbine" component={SveElasticPorudzbineComponent}></Route>
                          <Route path="/elasticArtikli" component={SviElasticArtikliComponent}></Route>
                          <Route path="/mojePorudzbine" component={PorudzbineKupcaComponent}></Route>
                          <Route path="/changePassword" component={ChangePasswordComponent}></Route>
                          <Route path="/home" component={HomeComponent}></Route>
                          <Route path="/changeInfo" component={ChangeInfoComponent}></Route>
                          
                          <PrivateRoute
                          exact
                          path="/artikliProdavcaElastic"
                          component={ArtikliProdavcaElastic}
                          roles={["ROLE_PRODAVAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/blockUser/:id"
                          component={BlockUserComponent}
                          roles={["ROLE_ADMINISTRATOR"]}
                          />
                          
                          <PrivateRoute
                          exact
                          path="/sviArtikli"
                          component={SviArtikliComponent}
                          roles={["ROLE_KUPAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/updateArtikal/:id"
                          component={UpdateArtikalComponent}
                          roles={["ROLE_PRODAVAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/updateArtikalElastic/:id"
                          component={UpdateArtikalElasticComponent}
                          roles={["ROLE_PRODAVAC"]}
                          />
                           <PrivateRoute
                          exact
                          path="/recenzirajPorudzbinu/:id"
                          component={RecenzirajPorudzbinuComponent}
                          roles={["ROLE_KUPAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/recenzirajElasticPorudzbinu/:id"
                          component={RecenzirajPorudzbinuComponent}
                          roles={["ROLE_KUPAC"]}
                          />
                          
                          <PrivateRoute
                          exact
                          path="/mojeElasticPorudzbine"
                          component={ElasticPorudzbineKupcaComponent}
                          roles={["ROLE_KUPAC"]}
                          />
                           <PrivateRoute
                          exact
                          path="/prodavci"
                          component={ProdavciComponent}
                          roles={["ROLE_KUPAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/svikorisnici"
                          component={UserComponent}
                          roles={["ROLE_ADMINISTRATOR"]}
                          />
                           <PrivateRoute
                          exact
                          path="/addArtikal"
                          component={AddArtikalComponent}
                          roles={["ROLE_PRODAVAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/artikli"
                          component={ArtikalComponent}
                          roles={["ROLE_PRODAVAC"]}
                          />
                          <PrivateRoute
                          exact
                          path="/artikliProdavcaElastic"
                          component={ArtikliProdavcaElastic}
                          roles={["ROLE_PRODAVAC"]}
                          />
                          
                          <PrivateRoute
                          exact
                          path="/licnipodaci"
                          component={UserInfoComponent}
                          roles={["ROLE_PRODAVAC","ROLE_KUPAC"]}
                          />

                    </Switch>
                </div>
        </Router>
        <Router>
          <Footer />
        </Router>
    </div>
  );
  }
}

export default App;
