import React, { Component } from 'react'
import ArtikalService from '../services/ArtikalService';


class UpdateArtikalComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            naziv: '',
            opis: '',
            cena: '',
            putanjaSlike:'',
        }
        this.changeNazivHandler = this.changeNazivHandler.bind(this);
        this.changeOpisHandler = this.changeOpisHandler.bind(this);
        this.changeCenaHandler = this.changeCenaHandler.bind(this);
        this.changePutanjaSlike = this.changePutanjaSlike.bind(this);

        this.updateArtikal = this.updateArtikal.bind(this);
}

componentDidMount(){
    ArtikalService.getArtikalById(this.state.id).then( (res) =>{
        let artikal = res.data;
        this.setState({naziv: artikal.naziv,
            opis: artikal.opis,
            cena: artikal.cena,
            putanjaSlike: artikal.putanjaSlike
            
        });

    });
}

updateArtikal = (e) =>{
        e.preventDefault();
        let artikal = {naziv: this.state.naziv, opis: this.state.opis, cena: this.state.cena,
        putanjaSlike: this.state.putanjaSlike
        }
        console.log('Artikal => ' + JSON.stringify(artikal));
        ArtikalService.updateArtikal(artikal, this.state.id).then(res => {
            this.props.history.push('/artikli');
        });


        
}

changeNazivHandler= (event) =>{
    this.setState({naziv: event.target.value});
}

changeOpisHandler= (event) =>{
    this.setState({opis: event.target.value});
}

changeCenaHandler= (event) =>{
    this.setState({cena: event.target.value});
}

changePutanjaSlike= (event) =>{
    this.setState({putanjaSlike: event.target.value});
}

cancel(){
    this.props.history.push('/artikli');
}

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Izmena artikla</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Naziv</label>
                                        <input placeholder="Naziv" name="naziv" className="form-control"
                                            value={this.state.naziv} onChange={this.changeNazivHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Opis</label>
                                        <input placeholder="Opis" name="opis" className="form-control"
                                            value={this.state.opis} onChange={this.changeOpisHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Cena</label>
                                        <input placeholder="Cena" name="cena" className="form-control"
                                            value={this.state.cena} onChange={this.changeCenaHandler}/>      
                                    </div>
                                    <div className="form-group">
                                        <label>Putanja slike</label>
                                        <input placeholder="Putanja Slike" name="putanjaSlike" className="form-control"
                                            value={this.state.putanjaSlike} onChange={this.changePutanjaSlike}/>       
                                    </div>
        
                                    <button className="btn btn-success" onClick={this.updateArtikal}>Izmeni</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UpdateArtikalComponent