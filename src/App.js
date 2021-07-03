import logo from './logo.svg';
import './App.css';
import ArtikalComponent from './components/ArtikalComponent';
import HeaderComponent from './components/HeaderComponent';
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


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent/>
                <div className="container">
                    <Switch> 
                          
                          <Route path="/registracijakupca" component={RegistracijaKupcaComponent}></Route>
                          <Route path="/registracijaprodavca" component={RegistracijaProdavcaComponent}></Route>
                          <Route path="/login" component={Login}></Route>
                          
                        
                          <Route path="/viewArtikal/:id" component={ViewArtikalComponent}></Route>
                          <Route path="/updateKorisnik/:id" component={UpdateUserComponent}></Route>
                          <Route path="/home" component={HomeComponent}></Route>

                          <PrivateRoute
                          exact
                          path="/updateArtikal/:id"
                          component={UpdateArtikalComponent}
                          roles={["ROLE_PRODAVAC"]}
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
                          roles={["ROLE_PRODAVAC","ROLE_KUPAC"]}
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
    </div>
  );
}

export default App;
