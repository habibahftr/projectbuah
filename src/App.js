import React, { Component } from 'react';
import { Header, Form, Table, Footer } from "./template";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <Header></Header>
        <Form></Form>
        <Table></Table>
        <Footer></Footer>
      </>

     );
  }
}
 
export default App;