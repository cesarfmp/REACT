import React, { Component } from 'react';
import Arbol from './components/Arbol';
import Cabecera from './components/Cabecera';
import Formulario from './components/Formulario';
import Pie from './components/Pie';
import Tabla from './components/Tabla';
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
       <Cabecera />
       <Formulario />     
       <Arbol />     
       <Tabla />     
       <Pie />     
      </div>    
    );
  }
}

export default App;
