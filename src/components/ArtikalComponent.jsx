import React from 'react'
import ArtikalService from '../services/ArtikalService'


class ArtikalComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            artikli:[]
        }

        this.addUser = this.addUser.bind(this);
    }

    componentDidMount(){
        ArtikalService.getArtikle().then((response) =>{
            this.setState({artikli:response.data})
        });
    }

    addUser(){
        this.props.history.push('/register');
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
                            <td>Id</td>
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
                                    <td> {artikal.id}</td>
                                    <td> {artikal.naziv}</td>
                                    <td>{artikal.opis}</td>
                                    <td>{artikal.cena}</td>
                                    <td>{artikal.putanjaSlike}</td>
                                </tr>
                            )

                        }
                    </tbody>

                </table>


            </div>
        )
    }

}

export default ArtikalComponent

