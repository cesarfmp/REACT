import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

class Alertas extends Component {
  
  constructor(props) {
    super(props);
    this.state = {   
      alertVisible: false
    };    
   
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    this.handleAlertShow = this.handleAlertShow.bind(this)
  }
  
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
  
  render () {
    
    if (this.state.alertVisible) {
    
      return (
        <div>                    
           <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>            
              <p>
                Se crearon 26 gamas hasta final de año.
              </p>                         
            </Alert>                         
        </div>
        
      );
    } else {
      return (
        <div>                                                        
        </div>
        
      );
    }
  }
}

export default Alertas;