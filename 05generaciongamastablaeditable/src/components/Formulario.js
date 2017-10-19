import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Form from 'react-bootstrap/lib/Form';

class Formulario extends Component {
  
  constructor() {
    super();
    this.state = {
      open: true
    };
  }
  
  
  render () {
    return (
      <div>
        <Panel header={this.props.datos.titulo} collapsible expanded={this.state.open}  onClick={ ()=> this.setState({ open: !this.state.open })}>
        <Form inline>
            <FormGroup>
              <ControlLabel>{this.props.datos.lblModeloGama}</ControlLabel>
              {' '}
              <FormControl.Static>
                {this.props.datos.modelo}
              </FormControl.Static>
            </FormGroup>  
            {' '}
            <FormGroup>              
              <ControlLabel>{this.props.datos.lblFechaInicio}</ControlLabel>
              {' '}
              <FormControl.Static>
                {this.props.datos.fechaInicio}
              </FormControl.Static>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}

export default Formulario;