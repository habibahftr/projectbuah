import React, { Component } from 'react';
import Form from "../form";
import Table from "../table";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fruits:[],

         }
    }

    save= (fruit)=>{
        const {name, stock, price}= fruit
        let newFruit = this.state.
    }


    render() { 
        return ( 
            <div>
                <Form></Form>
                <Table></Table>
            </div>
         );
    }
}
 
export default Body;