import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Alert from 'react-bootstrap/lib/Alert';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';



class App extends Component {
        
  render() {
    return (
      <div>     
        <ButtonToolbar>    
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link">Link</Button>
      </ButtonToolbar>


        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </Alert>
      </div>    
    );
  }
}

export default App;
