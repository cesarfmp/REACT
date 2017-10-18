import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Table from 'react-bootstrap/lib/Table';

class Tabla extends Component {
  
  constructor() {
    super();
    this.state = {
      open: true
    };
  }
  
  render () {
    return (
      <div>
          <Panel header={this.props.activos.titulo} collapsible expanded={this.state.open}  onClick={ ()=> this.setState({ open: !this.state.open })}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>                  
                    {this.props.activos.nombreColumnas.map(columna => {
                      return (
                        <th>{columna.titulo}</th>                        
                      );
                    })}                  
                </tr>
              </thead>
              <tbody>                
                  {this.props.activos.arrayActivos.map(activo => {
                    return (
                      <tr>
                        <td>{activo.codigo}</td>
                        <td>{activo.nombre}</td>
                        <td>{activo.tipo}</td>
                        <td>{activo.critico}</td>                        
                      </tr>                
                    );
                  })}
                
              </tbody>
            </Table>
          </Panel>
      </div>
    );
  }
}

export default Tabla;