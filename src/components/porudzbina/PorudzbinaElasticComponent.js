import React,{Component} from "react";
import PorudzbinaService from "../../services/PorudzbinaService";
import style from './style.css';


class SveElasticPorudzbineComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            porudzbine:[],
            inputKomentar : ""
        }
    }

    componentDidMount(){
        PorudzbinaService.getPorudzbineElastic().then((response ) => {
            this.setState({porudzbine: response.data})
        });
    }

    ispisiRezultat = () => {
        PorudzbinaService.searchPorudzbine(this.state.inputKomentar).then(res => {
            this.setState({porudzbine: res.data});
        });
    }

    render() { 
        return (
            <div>
                <h2 className="text-center"> Porudzbine </h2>
                <div className="center-search-bar">
                    <p>Pretraga po komentaru:</p><input 
                    value={this.state.inputKomentar} 
                    onChange={(e) => this.setState({inputKomentar: e.target.value})} />
                    <button onClick={this.ispisiRezultat} className='green-bg-button'>Pretrazi</button>
                </div>
                <table className="table table-striped">
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
                                <tr className="table-row" key = {porudzbina.id}>
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