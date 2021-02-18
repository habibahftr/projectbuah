import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../../component/menu";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }


    render() { 
        const{changePage}= this.props
        return ( 
            <>
                {/* <Link to="/">
                    <Menu redirect={()=> changePage("login")}>Login</Menu>
                </Link>
                <Link to="/regis">
                    <Menu redirect={()=> changePage("regis")}>Regis</Menu>
                </Link> */}
                <Link to="/home">
                    <Menu redirect={()=> changePage("home")}>Home</Menu>
                </Link>
                <Link to="/profil">
                    <Menu redirect={()=> changePage("profil")}>Profil</Menu>
                </Link>
            </>
         );
    }
}
 
export default Nav;