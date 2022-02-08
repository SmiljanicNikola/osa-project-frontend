import React, {Component} from "react";
import style from './porudzbina/style.css'
import ArtikalService from "../services/ArtikalService";

class SviElasticArtikliComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            artikli:[],
            inputNaziv:""
        }
    } 

    componentDidMount(){
        ArtikalService.getArtikliElastic().then((response ) => {
            this.setState({artikli: response.data})
        });
    }

    ispisiRezultat = () => {
        ArtikalService.searchArtiklePoNazivu(this.state.inputNaziv).then(res => {
            this.setState({artikli: res.data});
        })
    }

    render() { 
        return (
            <div>
                <h2 className="text-center"> Artikli </h2>
                <div className="center-search-bar">
                    <p>Pretraga po nazivu:</p><input 
                    value={this.state.inputNaziv} 
                    onChange={(e) => this.setState({inputNaziv: e.target.value})} />
                    <button onClick={this.ispisiRezultat} className='green-bg-button'>Pretrazi</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Naziv</td>
                            <td>Opis</td>
                            <td>Cena</td>
                            <td>Putanja Slike</td>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.artikli.map(
                                artikal=>
                                <tr className="table-row" key = {artikal.id} style={{height:"60px"}}>
                                    <td> {artikal.id}</td>
                                    <td>{artikal.naziv}</td>
                                    <td>{artikal.opis}</td>
                                    <td>{artikal.cena}</td>
                                    <td>{artikal.putanjaSlike}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
 

export default SviElasticArtikliComponent;