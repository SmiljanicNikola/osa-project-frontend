import logo from './logo.svg';
import './App.css';
import ArtikalComponent from './components/ArtikalComponent';
import HeaderComponent from './components/HeaderComponent';
import RegistracijaKupcaComponent from './components/RegistracijaKupcaComponent';
import RegistracijaProdavcaComponent from './components/RegistracijaProdavcaComponent';

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

                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
