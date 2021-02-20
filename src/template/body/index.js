import React, { Component } from 'react';
import { Route, Router, Switch, useHistory } from 'react-router-dom';
import Login from "../../page/login";
import Regis from "../../page/regis";
import Error from "../../page/error";
import Home from "../../page/home";
import FormGejala from "../../page/formg";
import Gejala from "../../page/gejala";
import Header from "../header";
import Footer from "../footer";
import Nav from "../navigation";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={
                    () => {
                        let history = useHistory()
                        return <Login history={history} />
                    }
                }></Route>
                {/* <Route path="/regis" component={
                    ()=> {
                        let history = useHistory()
                        return <Regis history={history} />
                    }
                } /> */}
                <Route path="/error" component={
                    () => {
                        let history = useHistory()
                        return <Error history={history} />
                    }
                } />
                <Route path="/home" component={
                    () => {
                        let history = useHistory()
                        return <Home history={history} currentPage="gejala" />
                    }
                } />
                <Route path="/formgejala" component={
                    () => {
                        let history = useHistory()
                        return (
                            < div >
                        <div >
                            <Header></Header>
                        </div>
                        <div className="row">
                            <div className="col-3 col-m-5">
                                <div >
                                    <Nav ></Nav>
                                </div>
                            </div>
                            <div className="col-9 col-m-7">
                                <div className="col-12 col-m-12">
                                        {/* <Bodydef currentPage={this.props.currentPage} />  */}
                                        <FormGejala/>
                                </div>
                            </div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                            <div className="row">
                                <div className="footer">
                                    <Footer></Footer>
                                </div>
                            </div>
                        </div>)
                    }}/>
                    
                    <Route path="/gejala" component={
                    () => {
                        let history = useHistory()
                        return (
                            < div >
                        <div >
                            <Header></Header>
                        </div>
                        <div className="row">
                            <div className="col-3 col-m-5">
                                <div >
                                    <Nav ></Nav>
                                </div>
                            </div>
                            <div className="col-9 col-m-7">
                                <div className="col-12 col-m-12">
                                        {/* <Bodydef currentPage={this.props.currentPage} />  */}
                                        <Gejala/>
                                </div>
                            </div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                            <div className="row">
                                <div className="footer">
                                    <Footer></Footer>
                                </div>
                            </div>
                        </div>)
                    }}/>

            </Switch>
        );
    }
}

export default Body;