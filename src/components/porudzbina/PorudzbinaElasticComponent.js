import React,{Component} from "react";
import PorudzbinaService from "../../services/PorudzbinaService";
import style from './style.css';
import axios from "axios";


class SveElasticPorudzbineComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            porudzbine:[],
            inputKomentar : "",
            inputMinOcena:0,
            inputMaxOcena:5
        }
    }

    componentDidMount(){
        PorudzbinaService.getPorudzbineElastic().then((response ) => {
            this.setState({porudzbine: response.data})
        });
    }

    ispisiRezultat = () => {
        PorudzbinaService.searchPorudzbinePoKomentaru(this.state.inputKomentar).then(res => {
            this.setState({porudzbine: res.data});
        });
    }
    ispisiRezultatPoOceni = () => {
        
        axios.get("http://localhost:8080/porudzbine7/ocena?minOcena="+this.state.inputMinOcena+"&maxOcena="+this.state.inputMaxOcena).then( (res) =>{
            this.setState({
                porudzbine:res.data
            });
        });
    }
    ponisti = () => {
        
        axios.get("http://localhost:8080/porudzbine7/ocena?minOcena=0&maxOcena=5").then( (res) =>{
            this.setState({
                porudzbine:res.data
            });
        });
    }

    render() { 
        return (
            <div>
                <h3 className="text-center"> Porudzbine </h3>

                <div className="center-search-bar" style={{marginTop:'40px'}}>
                   
                    <p style={{marginLeft:'30px',fontWeight:'600'}}>Po komentaru:</p>
                    <input 
                        value={this.state.inputKomentar} 
                        onChange={(e) => this.setState({inputKomentar: e.target.value})}
                    />
                    <button onClick={this.ispisiRezultat} className='green-bg-button'>Pretrazi</button>

                    <p style={{marginLeft:'60px',fontWeight:'600'}}>Po Oceni:</p>
                    <p style={{marginLeft:'15px'}}>Min:</p>
                    
                    <input 
                        style={{width:'30px'}}
                        value={this.state.inputMinOcena} 
                        onChange={(e) => this.setState({inputMinOcena: e.target.value})} 
                    />

                    <p style={{marginLeft:'5px'}}>Max:</p>
                    <input style={{width:'30px'}}
                    value={this.state.inputMaxOcena} 
                    onChange={(e) => this.setState({inputMaxOcena: e.target.value})} />

                    <button onClick={this.ispisiRezultatPoOceni} className='green-bg-button'>Pretrazi</button>
                    <button onClick={this.ponisti} className='red-bg-button'>Ponisti</button>

                </div>

                <table className="table table-striped" style={{marginTop:'25px'}}>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Satnica</td>
                            <td>Ocena</td>
                            <td>Komentar</td>
                            <td>AnonimanKomentar</td>
                            <td>ArhiviranKomentar</td>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.porudzbine.map(
                                porudzbina=>
                                <tr className="table-row" key = {porudzbina.id} style={{height:"60px"}}>
                                    <td> {porudzbina.id}</td>
                                    <td>{porudzbina.satnica}</td>
                                    <td>{porudzbina.ocena}</td>
                                    <td>{porudzbina.komentar}</td>
                                    <td>{porudzbina.anonimanKomentar?
                                        "Da"
                                        :
                                        "Ne"
                                    }</td>
                                    <td>{porudzbina.arhiviranKomentar?
                                        "Da"
                                        :
                                        "Ne"
                                    }</td>
                                

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

 
export default SveElasticPorudzbineComponent;