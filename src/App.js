import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./template/header";
import Footer from "./template/footer";
import Nav from "./template/navigation";
import Body from "./template/body";
import Bodydef from "./template/bodyDef";
import { connect } from "react-redux"
import Gejala from "./page/gejala";
import FormGejala from "./page/formg";
import AppLogin from "./applogin";
import AppContent from "./appcontent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage:"login"
     }
  }

  goToPage=page=>{
    this.setState({
      currentPage: page
    })
  }
  showPage=()=>{
    if(!this.props.checkLogin){
      console.log("login", this.props.checkLogin);
      return(
        <AppContent></AppContent>
             )
    }else{
      return (
        <AppLogin></AppLogin>
        
      )
    }
  }
  render() { 
    return ( 
      <>
      {this.showPage()}
      </>
     );
  }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin
})

const mapDispatchToProps = dispatch => {
  return {
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (App);