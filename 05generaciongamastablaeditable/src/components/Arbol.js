import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class Arbol extends Component {
 
  constructor() {
    super();
    this.state = {
      open: true
    };
  }
  
  
  render () {
    return (
      <div>
          <Panel header={this.props.espacios.titulo} collapsible expanded={this.state.open}  onClick={ ()=> this.setState({ open: !this.state.open })}>
              Pintar Arbol
          </Panel>
      </div>
    );
  }
}

export default Arbol;