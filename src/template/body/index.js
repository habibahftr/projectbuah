import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from "../../page/login";
import Regis from "../../page/regis";

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
                    ()=> {
                        let history = useHistory()
                        return <Login history={history} />
                    }
                }></Route>
                <Route path="/regis" component={
                    ()=> {
                        let history = useHistory()
                        return <Regis history={history} />
                    }
                } />

            </Switch>
         );
    }
}
 
export default Body;