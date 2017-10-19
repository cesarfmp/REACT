import React, { Component } from 'react';

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
                <Button onClick={this.props.handleAlertShow}>Generar</Button> 
                {' '}                 
              </FormGroup>                                      
        </div>
        
      );
    
  }
}

export default Pie;