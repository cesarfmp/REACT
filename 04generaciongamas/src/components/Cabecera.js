import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

class Cabecera extends Component {
  render () {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.google.es">
          Modelo
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Gama
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Cabecera;