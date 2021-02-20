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
            <div className="sidenav">
                <Link to="/home">
                    <Menu redirect={()=> changePage("home")}>Home</Menu>
                </Link>
                <Link to="/gejala">
                    <Menu redirect={()=> changePage("gejala")}>Indication</Menu>
                </Link>
                <Link to="/formgejala">
                    <Menu redirect={()=> changePage("formgejala")}>Form Indication</Menu>
                </Link>
                {/* <Link>
                    
                </Link> */}
                {/* <Link to="/profil">
                    <Menu redirect={()=> changePage("profil")}>Profil</Menu>
                </Link> */}
            </div>
         );
    }
}
 
export default Nav;