import React, { Component } from 'react'

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        return(
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="home" className="navbar-brand">  Home  </a></div>
                <div><a href="artikli" className="navbar-brand">  Artikli  </a></div>
               

                </nav>
                </header>
            </div>


        )
    }

}export default HeaderComponent