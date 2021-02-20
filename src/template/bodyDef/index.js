import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import FormGejala from "../../page/formg";
import Gejala from "../../page/gejala";
import "./style.css";


class Bodydef extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="bodydef"> 
            <Switch>
                <Route  path="/formgejala" component={
                    ()=> {
                        let history = useHistory()
                        return <FormGejala history={history} />
                    }
                }></Route>
                <Route exact path="/gejala" component={
                    ()=> {
                        let history = useHistory()
                        return <Gejala history={history} />
                    }
                }></Route>

            </Switch>
            </div>
         );
    }
}
 
export default Bodydef;