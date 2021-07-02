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





import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent/>
                <div className="container">
                    <Switch> 
                          <Route path="/artikli" component={ArtikalComponent}></Route>
                          <Route path="/registracijakupca" component={RegistracijaKupcaComponent}></Route>
                          <Route path="/registracijaprodavca" component={RegistracijaProdavcaComponent}></Route>
                          <Route path="/login" component={Login}></Route>
                          <Route path="/addArtikal" component={AddArtikalComponent}></Route>
                          <Route path="/updateArtikal/:id" component={UpdateArtikalComponent}></Route>
                          <Route path="/viewArtikal/:id" component={ViewArtikalComponent}></Route>
                          <Route path="/home" component={HomeComponent}></Route>




                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
