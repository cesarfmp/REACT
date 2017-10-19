import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Table from 'react-bootstrap/lib/Table';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table/lib/';

const selectRowProp = {
  mode: 'checkbox'
};

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
          <Panel header={this.props.activos.titulo}>
            <BootstrapTable ref='tablaGamas' data={this.props.activos.arrayActivos} selectRow={selectRowProp}>
                <TableHeaderColumn dataField='codigo' isKey>Código</TableHeaderColumn>
                <TableHeaderColumn dataField='nombre'>Nombre</TableHeaderColumn>
                <TableHeaderColumn dataField='tipo'>Título</TableHeaderColumn>
                <TableHeaderColumn dataField='critico'>Crítico</TableHeaderColumn>          
            </BootstrapTable>
          </Panel>
      </div>
    );
  }
}

export default Tabla;