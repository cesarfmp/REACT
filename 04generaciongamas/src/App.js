import React, { Component } from 'react';
import Arbol from './components/Arbol';
import Cabecera from './components/Cabecera';
import Formulario from './components/Formulario';
import Pie from './components/Pie';
import Tabla from './components/Tabla';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
     
  constructor() {
    super();
    this.state = {
      datos: {
        titulo: "Datos",
        expandidoPanel: true,
        lblModeloGama: "Modelo de gama",
        modelo: "Climatizador o UTA > 70 Kw",
        lblFechaInicio: "Fecha inicio",
        fechaInicio: '30/06/2017'
      },
      espacios: {
        titulo: 'Espacios',
        expandidoPanel: true
      },
      activos: {
        titulo: 'Activos',
        expandidoPanel: true
      },
      pie: {        
      }                
    };
  }

  render() {
    return (
      <div>          
       <Cabecera/>
       <Formulario datos={this.state.datos} />     
       <Arbol  espacios={this.state.espacios} />     
       <Tabla  activos={this.state.activos}/>     
       <Pie pie={this.state.pie}/>     
      </div>    
    );
  }
}

export default App;
