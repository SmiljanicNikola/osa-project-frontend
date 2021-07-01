import React from 'react'
import ArtikalService from '../services/ArtikalService'


class ArtikalComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            artikli:[]
        }

        this.addArtikal = this.addArtikal.bind(this);
        this.editArtikal = this.editArtikal.bind(this);
    }

    componentDidMount(){
        ArtikalService.getArtikle().then((response) =>{
            this.setState({artikli:response.data})
        });
    }

    editArtikal(id){
        this.props.history.push(`/updateArtikal/${id}`);
    }
    addArtikal(){
        this.props.history.push('/addArtikal');
    }


    render(){
        return (
            <div>
                <h1 className="text-center"> Lista Artikalaa </h1>
                {/* <button className="btn btn-primary" >Login</button>
                <button className="btn btn-primary" onClick={this.addUser}>Register</button> */}
                <div className="row">
                    

                </div>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Naziv</td>
                            <td>Opis</td>
                            <td>Cena</td>
                            <td>Putanja Slike</td>
                            <td>Actions</td>

                           
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                            this.state.artikli.map(
                                artikal=>
                                <tr key = {artikal.id}>
                                    <td> {artikal.naziv}</td>
                                    <td>{artikal.opis}</td>
                                    <td>{artikal.cena}</td>
                                    <td>{artikal.putanjaSlike}</td>
                                    <td>
                                        <button onClick={ () => this.editArtikal(artikal.id)} className="btn btn-info">Update</button>
                                    </td>
                                </tr>
                            )

                        }
                    </tbody>

                </table>

            <button className="btn btn-success" onClick={this.addArtikal}>Dodaj Artikal</button>

            </div>
        )
    }

}

export default ArtikalComponent

