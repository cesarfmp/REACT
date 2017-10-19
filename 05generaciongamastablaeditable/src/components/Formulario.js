import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Form from 'react-bootstrap/lib/Form';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Formulario extends Component {
  
  constructor() {
    super();
    this.state = {
      open: true,
      fechaInicio: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      fechaInicio: date
    });
  }
  
  
  render () {
    return (
      <div>
        <Panel header={this.props.datos.titulo}>
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
              <DatePicker selected={this.state.fechaInicio} onChange={this.handleChange} dateFormat="DD/MM/YYYY"/>
                
              </FormControl.Static>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}

export default Formulario;