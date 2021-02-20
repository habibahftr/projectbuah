import React, { Component } from 'react';
import Body from "./template/body";
import { BrowserRouter as Router } from 'react-router-dom';

class AppLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <Router>
          <Body></Body>
        </Router>
         );
    }
}
 
export default AppLogin;