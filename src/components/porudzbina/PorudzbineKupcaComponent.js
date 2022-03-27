import React, {Component} from "react";
import PorudzbinaService from '../../services/PorudzbinaService';
import {AuthenticationService} from '../../services/AuthenticationService';

class PorudzbineKupcaComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            username:AuthenticationService.getUsername(),
            porudzbineKupca:[]
        }
    }

    componentDidMount(){
        PorudzbinaService.getPorudzbineKupca(this.state.username).then((response) => {
            this.setState({porudzbineKupca:response.data})
        })
    }

    potvrdiPristiglost(id){
        PorudzbinaService.potvrdiPristiglostPorudzbine(id);
    }

    recenzirajPorudzbinu(id){
        this.props.history.push(`/recenzirajPorudzbinu/${id}`);
    }
    render() { 
        return (
            <div>
                <h2 className="text-center"> Moje porudzbine </h2>
                <table className="table table-striped" style={{width:'100%', marginTop:'20px'}}>
                    <thead>
                        <tr>
                            <td>Satnica</td>
                            <td>Ocena</td>
                            <td>Komentar</td>
                            <td>AnonKom</td>
                            <td>ArhivKom</td>
                            <td>Kupac</td>
                            <td>Stavka</td>
                            <td>Dostavljeno</td>
                            <td>Akcije</td>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.porudzbineKupca.map(
                                porudzbina=>
                                <tr key = {porudzbina.id}>
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
                                    <td>{porudzbina.kupac.id}</td>
                                    <td>{'Artikal: ' + porudzbina.stavka.artikal.naziv + " kolicina: " + porudzbina.stavka.kolicina + " Ukupna cena: " + porudzbina.stavka.artikal.cena * porudzbina.stavka.kolicina }</td>
                                    <td>
                                        {porudzbina.dostavljeno?
                                        "Da"
                                        :
                                        "Ne"
                                        }
                                    </td>
                                    <td>
                                        <div className="dugmici">
                                        {porudzbina.dostavljeno?
                                        ""
                                        :
                                        <button onClick={ () => {this.potvrdiPristiglost(porudzbina.id);window.location.reload(false)}} className="btn btn-success" style={{height:'40px',width:'100px'}} >Stiglo ✔</button>
                                        }
                                        {porudzbina.komentar == 'nije unesen'?
                                        <button onClick={ () => this.recenzirajPorudzbinu(porudzbina.id)} className="btn btn-info" style={{height:'40px',marginLeft:'10px'}}>Recenziraj</button>
                                        :
                                        ""
                                        }
                                        
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default PorudzbineKupcaComponent;