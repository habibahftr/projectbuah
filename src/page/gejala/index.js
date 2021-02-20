import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class Gejala extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitClicked=()=>{
        console.log("submit",this.props.history);
        this.props.history.push("/formgejala")
    }

    delClicked=(index)=>{
        alert(`Apakah Anda Ingin menghapus data ini?`)
        console.log("index", index);
        let dataBaru= this.props.indicat.splice(index, 1)
        dataBaru= dataBaru.splice(index, 1)
        console.log("data baru", dataBaru);
        alert(`Data berhasil terhapus`)

    }

    render() {
        console.log("gejala", this.props.history);
        return (
            <>
                <div className="container" >
                    <div>
                        <button onClick={this.submitClicked}>Add</button>
                    </div>
                    <div>
                        <table id="table" cellspasing="0" border="1" >
                            <thead >
                                <tr style={{ backgroundcolor: "aquamarine" }} >
                                    <th className="tText" > Indication </th>
                                    <th className="tText" > Description </th>
                                    <th className="tAction" > Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.indicat.map((el, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{el.indication}</td>
                                                <td>{el.description}</td>
                                                <td className="tdAction">
                                                    <button className="button" type="button" onClick={()=>this.delClicked(index)} > Delete </button>
                                                    <button className="button" type="button" > Update </button>
                                                </td>
                                             </tr>
                                         )
                                     })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div id="page">

                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    // dataUser: state.UReducer.users,
    indicat: state.InReducer.indications

    
  })
  
const mapDispatchToProps = dispatch => {
    return {
        gejala: (data)=> dispatch({type:"INDICATION_PAGE", payload: data}),
        clearData: (id)=> dispatch({type:"CLEAR_DATA", payload: id})
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Gejala);