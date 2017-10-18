import React, { Component } from 'react';

import Alertas from './Alertas';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';



class Pie extends Component {
  
  constructor(props) {
    super(props);
    this.state = {      
    };       
  }
    

  handleAlertShow() {
    //this.setState({alertVisible: true});
  }
  
  render () {    
    
      return (
        <div>                              
              <FormGroup inline="true" className="pull-right">              
                <Checkbox inline>
                  {this.props.pie.lblAgruparEntidades}
                </Checkbox>
                {' '}
                <Button onClick={() => this.refs.alertas.handleAlertShow()}>Generar</Button> 
                {' '}                 
              </FormGroup>          
              {' '}
              <Alertas ref="alertas"/>                                       
        </div>
        
      );
    
  }
}

export default Pie;