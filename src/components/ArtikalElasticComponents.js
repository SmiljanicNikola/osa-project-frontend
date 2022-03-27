import React, {Component} from "react";
import style from './porudzbina/style.css'
import ArtikalService from "../services/ArtikalService";
import axios from "axios";

class SviElasticArtikliComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            artikli:[],
            inputNaziv:"",
            inputMinCena:0,
            inputMaxCena:99999
        }

        this.addArtikalElastic = this.addArtikalElastic.bind(this);

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

    ispisiRezultatPoCeni = () => {
        
        axios.get("http://localhost:8080/artikli7/cena?minCena="+this.state.inputMinCena+"&maxCena="+this.state.inputMaxCena).then( (res) =>{
            this.setState({
                artikli:res.data
            });
        });
    }

    ponisti = () => {
        this.state.inputMinCena = 0;
        this.state.inputMaxCena = 99999;
        axios.get("http://localhost:8080/artikli7/cena?minCena=0&maxCena=999999").then( (res) =>{
            this.setState({
                artikli:res.data
            });
        });
    }

    addArtikalElastic(){
        this.props.history.push('/addArtikal');
    }

    render() { 
        return (
            <div>
                <h3 className="text-center"> Artikli </h3>

                 <div className="center-search-bar" style={{marginTop:'40px'}}>
                   
                   <p style={{marginLeft:'30px',fontWeight:'600'}}>Po Nazivu:</p>
                   <input 
                       value={this.state.inputNaziv} 
                       onChange={(e) => this.setState({inputNaziv: e.target.value})}
                   />
                   <button onClick={this.ispisiRezultat} className='green-bg-button'>Pretrazi</button>

                   <p style={{marginLeft:'60px',fontWeight:'600'}}>Po Ceni:</p>
                   <p style={{marginLeft:'15px'}}>Min:</p>
                   
                   <input 
                       style={{width:'60px'}}
                       value={this.state.inputMinCena} 
                       onChange={(e) => this.setState({inputMinCena: e.target.value})} 
                   />

                   <p style={{marginLeft:'5px'}}>Max:</p>
                   <input style={{width:'60px'}}
                   value={this.state.inputMaxCena} 
                   onChange={(e) => this.setState({inputMaxCena: e.target.value})} />

                   <button onClick={this.ispisiRezultatPoCeni} className='green-bg-button'>Pretrazi</button>
                   <button onClick={this.ponisti} className='red-bg-button'>Ponisti</button>

               </div>

                <table className="table table-striped" style={{marginTop:'25px'}}>
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