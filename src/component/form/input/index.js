import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <input name={this.props.name} checked={this.props.checked} type={this.props.type} onChange={this.props.onChange} value={this.props.value}  placeholder={this.props.children}/>{this.props.children}
            </div>
         );
    }
}
 
export default Input;