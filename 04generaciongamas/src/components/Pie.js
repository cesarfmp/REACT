import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

class Pie extends Component {
  
  constructor() {
    super();
    this.state = {   
    };
  }
  
  render () {
    return (
      <div>                              
            <FormGroup inline className="pull-right">              
              <Checkbox inline>
                {this.props.pie.lblAgruparEntidades}
              </Checkbox>
              {' '}
              <Button>Generar</Button> 
              {' '}                 
            </FormGroup>          
            {' '}                             
      </div>
      
    );
  }
}

export default Pie;