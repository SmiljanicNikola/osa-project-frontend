import React, {Component} from 'react'
import PorudzbinaService from '../../services/PorudzbinaService'
import style from './style.css';

class RecenzirajPorudzbinuComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            id:this.props.match.params.id,
            komentar:'',
            ocena:''
        }
        this.changeKomentarHandler = this.changeKomentarHandler.bind(this);
        this.changeOcenaHandler = this.changeOcenaHandler.bind(this);

        this.recenzirajPorudzbinu = this.recenzirajPorudzbinu.bind(this);
    }
    componentDidMount(){
        PorudzbinaService.getPorudzbinaById(this.state.id).then((res) => {
            let porudzbina = res.data;
            this.setState({
                komentar:porudzbina.komentar,
                ocena:porudzbina.ocena
            });
        });
    }

    recenzirajPorudzbinu = (e) =>{
        e.preventDefault();
        if(this.state.komentar == '' || this.state.ocena== ''){
            console.log('obavezno je');
        }else{
        let porudzbina={komentar:this.state.komentar, ocena:this.state.ocena}
        PorudzbinaService.recenzirajPorudzbinu(porudzbina, this.state.id).then(res => {
            this.props.history.push('/mojePorudzbine')
        })
    }
    }

    changeKomentarHandler= (event) =>{
        this.setState({komentar: event.target.value});
    }

    changeOcenaHandler= (event) =>{
        this.setState({ocena: event.target.value});
        
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop:'15px'}}>Ostavi recenziju</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" style={{marginTop:'15px'}}>
                                        <label>Komentar</label>
                                        <input placeholder="Komentar" name="komentar" className="form-control"
                                            value={this.state.komentar} onChange={this.changeKomentarHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Ocena</label>
                                        <input type="number" placeholder="Ocena" name="ocena" max="5" min="1" className="form-control"
                                            value={this.state.ocena} onChange={this.changeOcenaHandler}/>
                                    </div>
                                
                                    <center>
                                    <button className="btn btn-success" onClick={this.recenzirajPorudzbinu} style={{marginTop:'15px'}}>Recenziraj</button>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
 
export default RecenzirajPorudzbinuComponent;