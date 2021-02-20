import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./template/footer";
import Header from "./template/header";
import Bodydef from "./template/bodyDef";
import Nav from "./template/navigation";
class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // <Router>
      <div >
      <div >
          <Header></Header>
      </div>
      <div className="row">
          <div className="col-3 col-m-5">
              <div >
                  <div >
                      SILEBAR
                  </div>
                  <div >
                      <Nav></Nav>
                  </div>
              </div>
          </div>
          <div className="col-9 col-m-7">
              <div >
                  <div className="col-12 col-m-12">
                      <Router>
                      <Bodydef></Bodydef>
                      </Router>
                  </div>
              </div>
          </div>
      </div>
      <div style={{clear:"both"}}></div>
      <div className="row">
          <div className="footer">
              <div className="footer">
                 <Footer></Footer>
              </div>
          </div>
      </div>
  </div>
  // </Router>

         );
    }
}
 
export default AppContent;