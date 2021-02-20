import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../../component/menu";
import "./style.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }


    render() { 
        const{changePage}= this.props
        return ( 
            <div className="sidenav" style={{color:"white"}}>
                <Link to="/home">
                    <Menu >Home</Menu>
                </Link>
                <Link to="/gejala">
                    <Menu>Gejala</Menu>
                </Link>
                <Link to="/formgejala">
                    <Menu>Form Gejala</Menu>
                </Link>
            </div>
         );
    }
}
 
export default Nav;