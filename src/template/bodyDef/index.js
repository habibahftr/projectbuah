import React, { Component } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Profil from "../../page/profil";
import Home from "../../page/home";


class Bodydef extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Switch>
                <Route exact path="/home" component={
                    ()=> {
                        let history = useHistory()
                        return <Home history={history} />
                    }
                }/>
                <Route path="/profil" component={
                    ()=> {
                        let history = useHistory()
                        return <Profil history={history} />
                    }
                }/>
            </Switch>
         );
    }
}
 
export default Bodydef;