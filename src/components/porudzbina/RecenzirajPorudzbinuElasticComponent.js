import React, {Component} from 'react'
import PorudzbinaService from '../../services/PorudzbinaService'
import style from './style.css';

class RecenzirajPorudzbinuComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            id:this.props.match.params.id,
            komentar:'eee',
            ocena:'',
            dostavljeno:'',
            anonimanKomentar:'',
            arhiviranKomentar:''
        }
        this.changeKomentarHandler = this.changeKomentarHandler.bind(this);
        this.changeOcenaHandler = this.changeOcenaHandler.bind(this);

        this.recenzirajElasticPorudzbinu = this.recenzirajElasticPorudzbinu.bind(this);
    }
    componentDidMount(){
        PorudzbinaService.getElasticPorudzbinaById(this.state.id).then((res) => {
            let porudzbina = res.data;
            this.setState({
                satnica: porudzbina.satnica,
                dostavljeno: porudzbina.dostavljeno,
                arhiviranKomentar: porudzbina.arhiviranKomentar,
                anonimanKomentar:porudzbina.anonimanKomentar,
                komentar:porudzbina.komentar,
                ocena:porudzbina.ocena,
                kupacId:porudzbina.kupacId,
                stavkaId:porudzbina.stavkaId
            });
        });
        console.log(this.state.komentar);
    }

    recenzirajElasticPorudzbinu = (e) =>{
        e.preventDefault();
        if(this.state.komentar == '' || this.state.ocena== ''){
            console.log('obavezno je');
        }else{
        let porudzbina={id:this.state.id, satnica:this.state.satnica, dostavljeno:this.state.dostavljeno, ocena:this.state.ocena,
            komentar:this.state.komentar, anonimanKomentar:this.state.anonimanKomentar, arhiviranKomentar:this.state.arhiviranKomentar, kupacId:this.state.kupacId, stavkaId:this.state.stavkaId}
        console.log(porudzbina);
        PorudzbinaService.createPorudzbinaElastic(porudzbina).then(res => {
            this.props.history.push('/mojeElasticPorudzbine')
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
                                    <button className="btn btn-success" onClick={this.recenzirajElasticPorudzbinu} style={{marginTop:'15px'}}>Recenziraj</button>
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