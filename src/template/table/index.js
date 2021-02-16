import React, { Component } from 'react';
import "../style.css"

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div class="container2">
                    <div class="table">
                        <table id="table" cellspasing="0" border="1">
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Stock</th>
                                <th>Aksi</th>
                            </tr>
                            <tbody id="bodyTable" style={{textAlign: "center"}}></tbody>
                        </table>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Table;