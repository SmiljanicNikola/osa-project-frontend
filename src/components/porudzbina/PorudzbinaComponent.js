import React, {Component} from "react";
import PorudzbinaService from "../../services/PorudzbinaService";
import { AuthenticationService } from "../../services/AuthenticationService";

class SvePorudzbineComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            porudzbine:[]
        }
    }

    componentDidMount(){
        PorudzbinaService.getPorudzbine().then((response ) => {
            this.setState({porudzbine: response.data})
        });
    }

    render() { 
        return (
            <div>
                <h1 className="text-center"> Lista svih porudzbina</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Satnica</td>
                            <td>Ocena</td>
                            <td>Komentar</td>
                            <td>AnonimanKomentar</td>
                            <td>ArhiviranKomentar</td>
                            <td>Kupac</td>
                            <td>Stavka</td>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.porudzbine.map(
                                porudzbina=>
                                <tr key = {porudzbina.id}>
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
                                    <td>{porudzbina.kupac.id}</td>
                                    <td>{porudzbina.stavka.id}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default SvePorudzbineComponent;