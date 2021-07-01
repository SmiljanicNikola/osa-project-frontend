import React, { Component } from 'react'
import ArtikalService from '../services/ArtikalService';


class ViewArtikalComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            artikli: {}
        }
        
}

componentDidMount(){
    ArtikalService.getArtikalById(this.state.id).then(res => {
        this.setState({artikli: res.data});
    });
}



cancel(){
    this.props.history.push('/artikli');
}

    render(){
        return(
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">View artikal details</h2>
                    <div className="card-body">
                        <div className="row">
                            <label style={{color:"red"}}>Naziv artikla : {this.state.artikli.naziv}</label>
                        </div><br></br>
                        <div className="row">
                            <label style={{color:"red"}}>Opis artikla : {this.state.artikli.opis}</label>
                        </div><br></br>
                        <div className="row">
                            <label style={{color:"red"}}>Cena artikla : {this.state.artikli.cena}</label>
                        </div><br></br>
                        <div className="row" width="100%">
                            <label style={{color:"red"}}>Putanja do slike : {this.state.artikli.putanjaSlike}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ViewArtikalComponent