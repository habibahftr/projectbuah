import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, Input } from "../../component/form";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
         }
    }

    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    doLogin=(dataLogin)=>{
        const {username, password}= dataLogin
        const {dataUser}= this.props //data dari register
        let find = dataUser.filter(user => {
            return user.username === username && user.password === password 
        })
        let find1 = dataUser.filter(user => {
            return user.username === username
        })
        console.log("find1", find1);
        if(find.length>0){
            this.props.submitLogin(find1[0])
            alert(`login succesfully`);
        }else{
            alert(`username & password is undifined`)
        }



    }
    render() { 
        // console.log("LOGIN", this.props.dataUser);
        const {username, password} = this.state
        return ( 
            <>
                <Label>Username </Label>
                <Input type="text" name="username" onChange={this.setValue} placeholder="username.."></Input>
                <Label>Password </Label>
                <Input type="password" name="password" onChange={this.setValue}></Input>
                <button onClick={()=>this.doLogin({username, password})}>Login</button>
                <Link to="/regis">
                    <button>Regis</button>
                </Link>

            </>
         );
    }
}

const mapStateToProps = state => ({
    dataUser: state.UReducer.users,
    checkLogin: state.AReducer.isLogin,
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        submitLogin: (data) => dispatch({ type: "LOGIN", payload:data }),
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps) (Login);