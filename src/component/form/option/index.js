import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <option value={this.props.value}>{this.props.children}</option> 
            </div>
         );
    }
}
 
export default Option;