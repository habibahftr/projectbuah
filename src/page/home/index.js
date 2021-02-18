import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <button onClick={()=>this.props.history.push("/profil")}>Profile</button>
            <button>Fruit Stock</button>
            <button>Report</button>
            </>
         );
    }
}
 
export default Home;