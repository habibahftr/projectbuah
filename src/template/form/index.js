import React, { Component } from 'react';
import Input from "../../component/input"
import Label from "../../component/label"
import "../style.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            stock:"",
            price:"",
         }
         this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit= (event)=>{
        this.setState({
            name:"",
            stock:"",
            price:"",
        })
        event.preventDefault()
    }
    valueHandler = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() { 
        return ( 
            <>
                <form className="form1">
                    <Label>Fruit Name: </Label> <Input name="name" type="text" onChange="{this.valueHandler}" placeholder="Fruit name.."></Input> <br/>
                    <Label>Stock: </Label> <Input name="stock" type="number" onChange="{this.valueHandler}"></Input><br/>
                    <Label>Price: </Label> <Input name="price" type="number" onChange="{this.valueHandler}"></Input>
                </form>
                <button  class="button" id="button1" >Submit</button>
            </>
         );
    }
}
 
export default Form;