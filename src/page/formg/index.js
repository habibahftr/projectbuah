import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import Label from "../../component/form/label";
import Input from "../../component/form/input";

class FormGejala extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indication:"",
            description:"",
         }
    }

    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    save=(data)=>{
        let obj =this.state
        this.props.gejala(obj);
        data.preventDefault()
        this.clear()
        this.props.history.push("/gejala")
    }

    clear = () => {
        this.setState({ 
            indication:"",
            description:"",
        })
    }
    render() {
        console.log("gejala", this.props.dataUser); 
        const{indication, description} = this.state
        return ( 
            <div>
                <div className="card-content">
                    <div className="card-title">
                        <h2>INDICATION LIST</h2>
                    <div className="underline-title"></div>
                    </div>
                </div>
                <div>
                    <Label>Indication </Label> <Input type="text" name="indication" value={indication} onChange={this.setValue} placeholder="seperti demam, batuk kering, sesak napas, dll.." />
                    <Label>Description </Label> <textarea type="text" name="description" value={description} onChange={this.setValue} placeholder="" />                    
                    {/* <Link to="/">
                        <button type="submit" value="submit" onClick={this.save} >Submit</button>
                    </Link> */}
                </div>

            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    dataUser: state.UReducer.users,
    indicat: state.InReducer.indications
    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        gejala: (data)=> dispatch({type:"INDICATION_PAGE", payload: data}),
        
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps) (FormGejala);