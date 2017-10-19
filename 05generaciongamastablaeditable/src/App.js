import React, { Component } from 'react';
import Arbol from './components/Arbol';
import Cabecera from './components/Cabecera';
import Formulario from './components/Formulario';
import Pie from './components/Pie';
import Tabla from './components/Tabla';
import Alertas from './components/Alertas';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

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
        expandidoPanel: true,
        nombreColumnas: [{
          id: 1,
          titulo: 'Código'
        },{
          id: 2,
          titulo: 'Nombre'
        },{
          id: 3,
          titulo: 'Tipo'
        },{
          id: 4,
          titulo: 'Crítico'
        }],
        arrayActivos: [{
          id: 1,
          codigo: '009.005.1',
          nombre: 'Sirena SAM 800',
          tipo: 'Sirena',
          critico: 'Alta criticidad'
        },{
          id: 2,
          codigo: '007.005.11',
          nombre: 'Luminaria Estanca 1X58W',
          tipo: 'Alumbrado',
          critico: 'Baja criticidad'
        },{
          id: 3,
          codigo: '009.003.17',
          nombre: 'Pulsador Zetler CP 820',
          tipo: 'Pulsador',
          critico: 'Mediana criticidad'
        },{
          id: 4,
          codigo: '009.002.1',
          nombre: 'Detector 830 PH',
          tipo: 'Detector de incendios',
          critico: 'Alta criticidad'
        }]
      },
      pie: {
        lblAgruparEntidades: 'Agrupar entidades',
        lblGenerar: 'Generar'
      }                
    };
  }

  handleAlertShow() {
    
    

    var tabla = this.refs.tabla.refs.tablaGamas;

    if (tabla.state.selectedRowKeys && tabla.state.selectedRowKeys.length > 0)  {

      var mensaje = "Se han seleccionado los siguientes registros: ";
      
      tabla.state.selectedRowKeys.forEach( function(valor, indice, array) {
        mensaje += valor + " ";
      });

      
      this.refs.alertas.handleAlertShow(mensaje, "success");

    } else {
      var mensaje = "No se han seleccionado ningún registro";
      this.refs.alertas.handleAlertShow(mensaje, "warning");
    }

    
  }

  render() {
    return (
      <div>          
       <Alertas ref="alertas"/>                                          
       <Cabecera/>
       <Formulario datos={this.state.datos} />     
       <Arbol  espacios={this.state.espacios} />     
       <Tabla ref="tabla"  activos={this.state.activos}/>     
       <Pie pie={this.state.pie} handleAlertShow={this.handleAlertShow.bind(this)}/>            
      </div>    
    );
  }
}

export default App;
