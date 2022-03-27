import React, {Component} from "react";
import PorudzbinaService from '../../services/PorudzbinaService';
import {AuthenticationService} from '../../services/AuthenticationService';
import axios from "axios";

class ElasticPorudzbineKupcaComponent extends React.Component {
        constructor(props){
            super(props)
            this.state={
                username:AuthenticationService.getUsername(),
                porudzbineKupcaElastic:[],
                idKupca:''
            }
        }

        componentDidMount()
        {

            axios.get(`http://localhost:8080/api/kupci/username/${this.state.username}`).then( (res) =>{
                let kupac = res.data;
                this.setState({
                    idKupca: kupac.id
                });
                console.log('ODRADJEN Kupac GETOVANJE');
                console.log(this.state.idKupca);

            });  

            PorudzbinaService.getPorudzbineElastic().then((response) => {
                this.setState({porudzbineKupcaElastic:response.data})
                this.setState({porudzbineKupcaElastic: this.state.porudzbineKupcaElastic.filter(porudzbineKupcaElastic => porudzbineKupcaElastic.kupacId == this.state.idKupca)})

            })

        }

        recenzirajPorudzbinu(id){
            this.props.history.push(`/recenzirajElasticPorudzbinu/${id}`);
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
                                <td>Dostavljeno</td>
                                <td>Akcije</td>
    
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.porudzbineKupcaElastic.map(
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
                                    <td>{porudzbina.dostavljeno?
                                        "Da"
                                        :
                                        "Ne"
                                    }</td>
                                    <td>
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
 
export default ElasticPorudzbineKupcaComponent;