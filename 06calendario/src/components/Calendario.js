import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);



class Calendario extends Component {
 
  constructor() {
    super();
    this.state = {
      open: true
    };
  }
  
  
  render () {

    let rtl = this.state.culture === 'es';

    return (
      <div>
          <Panel header={this.props.espacios.titulo}>
            <BigCalendar {...this.props} rtl={rtl} events={events} step={60} defaultDate={new Date()} />
          </Panel>
      </div>
    );
  }
}

export default Calendario;