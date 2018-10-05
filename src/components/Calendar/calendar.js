//src/components/Calendar/calendar.js
import React, { Component } from 'react';

import './calendar.css';
import ReactCalendar from 'react-calendar';
export default class Calendar extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      date: new Date()
    }
  }


  render() {    
    return (
      <div className="Calendar">
        <ReactCalendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
