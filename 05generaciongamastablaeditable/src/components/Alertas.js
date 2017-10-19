import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Panel from 'react-bootstrap/lib/Panel';

class Alertas extends Component {
  
  constructor(props) {
    super(props);
    this.state = {   
      alertVisible: false,
      mensaje: 'Operacion realizada'
    };    
   
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    this.handleAlertShow = this.handleAlertShow.bind(this)
  }
  
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow(mensaje, tipo) {
    //alert(mensaje);
    this.setState({
      alertVisible: true,
      mensaje: mensaje,
      tipo: tipo
    });
  }
  
  render () {
    
    if (this.state.alertVisible) {
    
      return (
       
        <Alert bsStyle={this.state.tipo} onDismiss={this.handleAlertDismiss}>            
          <p>
            {this.state.mensaje}
          </p>                         
        </Alert>                         
       
        
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