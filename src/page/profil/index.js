import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }


    render() { 
        return ( 
            <>
            <div>ini profil</div>
            <div>{this.props.dataUser.username}</div>
            <div>{this.props.dataUser.phone}</div>

            </>
         );
    }
}

const mapStateToProps=state=> ({
    dataUser: state.AReducer.userLogin,

})

const mapDispatchToProps = dispatch =>{
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Profil);