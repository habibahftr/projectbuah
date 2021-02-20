import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import FormGejala from "../../page/formg";
import Gejala from "../../page/gejala";
import Header from "../../template/header";
import Footer from "../../template/footer";
import Bodydef from "../../template/bodyDef";
import Nav from "../../template/navigation";
import { BrowserRouter as Router } from 'react-router-dom';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    isPage=()=>{
        if (this.props.currentPage === "formgejala") {
            return <FormGejala></FormGejala>
        } else {
            return <Gejala></Gejala>
            
        }
    }
    render() {
        console.log("ini home");
        return (
            <>
                    <div >
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
                                        {this.isPage()}
                                </div>
                            </div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                            <div className="row">
                                <div className="footer">
                                    <Footer></Footer>
                                </div>
                            </div>
                        </div>
                {/* <div>
                    <div>
                        <Nav/>
                    </div>
                    <div>
                        <Bodydef/>
                    </div>
                </div> */}
            </>
        );
    }
}

export default Home;