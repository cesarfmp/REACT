import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class Tabla extends Component {
  
  constructor() {
    super();
    this.state = {
      open: true
    };
  }
  
  render () {
    return (
      <div>
          <Panel header={this.props.activos.titulo} collapsible expanded={this.state.open}  onClick={ ()=> this.setState({ open: !this.state.open })}>
              Pintar Activos
          </Panel>
      </div>
    );
  }
}

export default Tabla;