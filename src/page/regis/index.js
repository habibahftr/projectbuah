import React, { Component } from 'react';
import { Label, Input, Option } from "../../component/form";
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
            phone:"",
            email:"",
            role:"",
         }
    }

    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    setRegister = el =>{
        let obj = this.state
        this.props.register(obj);
        el.preventDefault()
        this.clear()
        this.props.history.push("/")
    }

    

    clear = () => {
        this.setState({ 
            username:"",
            password:"",
            phone:"",
            email:"",
            role:"",})
    }

    render() {
        console.log("REGIS", this.props.dataUser); 
        return ( 
            <div className="container">
                <h1>C R E A T E    A C C O U N T</h1>
                <div>
                    <Label>Username </Label> <Input type="text" name="username" value={this.state.username} onChange={this.setValue} placeholder="your username.." />
                    <Label>Password </Label> <Input type="text" name="password" value={this.state.password} onChange={this.setValue} placeholder="your password.." />
                    <Label>Phone Number </Label> <Input type="text" name="phone" value={this.state.phone} onChange={this.setValue} placeholder="your phone number.." />
                    <Label>Email </Label> <Input type="text" name="email" value={this.state.email} onChange={this.setValue} placeholder="your email.." />
                    <Label>Role </Label>
                    <select value={this.state.role} name="role" onChange={this.setValue}>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                    </select><br/>
                    <Link to="/">
                        <button type="submit" value="submit" onClick={this.setRegister} >Sign Up</button>
                    </Link>
                </div>

            </div>
         );
    }
}


const mapStateToProps = state => ({
    dataUser: state.UReducer.users
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        register: (data)=> dispatch({type:"REGISTER", payload: data}),
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps) (Regis);