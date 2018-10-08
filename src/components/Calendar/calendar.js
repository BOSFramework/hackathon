
import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale('en-US');
export default class Calendar extends Component {
    state = {
        events: [
            {
                'title': 'My event',
                'allDay': false,
                'start': new Date(2018, 9, 8, 10, 0), // 10.00 AM
                'end': new Date(2018, 9, 8, 14, 0), // 2.00 PM 
            },
            {
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2018, 9, 0),
                end: new Date(2018, 9, 1),
            },
            {
                title: 'Long Event',
                start: new Date(2018, 9, 7),
                end: new Date(2018, 9, 10),
            },

            {
                title: 'DTS STARTS',
                start: new Date(2018, 2, 13, 0, 0, 0),
                end: new Date(2018, 2, 20, 0, 0, 0),
            },

            {
                title: 'DTS ENDS',
                start: new Date(2018, 9, 6, 0, 0, 0),
                end: new Date(2018, 9, 19, 0, 0, 0),
            },

            {
                title: 'Some Event',
                start: new Date(2018, 9, 9, 0, 0, 0),
                end: new Date(2018, 9, 10, 0, 0, 0),
            },
            {
                title: 'Conference',
                start: new Date(2018, 9, 11),
                end: new Date(2018, 9, 13),
                desc: 'Big conference for important people',
            },
            {

                title: 'Meeting',
                start: new Date(2018, 9, 12, 10, 30, 0, 0),
                end: new Date(2018, 9, 12, 12, 30, 0, 0),
                desc: 'Pre-meeting meeting, to prepare for the meeting',
            },
            {
                title: 'Lunch',
                start: new Date(2018, 9, 12, 12, 0, 0, 0),
                end: new Date(2018, 9, 12, 13, 0, 0, 0),
                desc: 'Power lunch',
            },
            {

                title: 'Meeting',
                start: new Date(2018, 9, 12, 14, 0, 0, 0),
                end: new Date(2018, 9, 12, 15, 0, 0, 0),
            },
            {
                title: 'Happy Hour',
                start: new Date(2018, 9, 12, 17, 0, 0, 0),
                end: new Date(2018, 9, 12, 17, 30, 0, 0),
                desc: 'Most important meal of the day',
            },
            {
                title: 'Dinner',
                start: new Date(2018, 9, 12, 20, 0, 0, 0),
                end: new Date(2018, 9, 12, 21, 0, 0, 0),
            },
            {
                title: 'Birthday Party',
                start: new Date(2018, 9, 13, 7, 0, 0),
                end: new Date(2018, 9, 13, 10, 30, 0),
            },
            {
                title: 'Late Night Event',
                start: new Date(2018, 9, 17, 19, 30, 0),
                end: new Date(2018, 9, 18, 2, 0, 0),
            },
            {
                title: 'Late Same Night Event',
                start: new Date(2018, 9, 17, 19, 30, 0),
                end: new Date(2018, 9, 17, 23, 30, 0),
            },
            {
                title: 'Multi-day Event',
                start: new Date(2018, 9, 20, 19, 30, 0),
                end: new Date(2018, 9, 22, 2, 0, 0),
            }
        ]
    };

    render() {
        return (
            <BigCalendar
                localizer={BigCalendar.momentLocalizer(moment)}
                views={{ month: true, week: true, day: true, agenda: true }}
                defaultView="month"
                min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
                max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
                defaultDate={new Date(2018, 9, 8)}
                events={this.state.events}
                style={{ height: 700 }}
            />
        );
    }
}

export default Calendar;



//src/components/Calendar/calendar.js
//import React, { Component } from 'react';
//import './calendar.css';
//import ReactCalendar from 'react-calendar';
//export default class Calendar extends Component {
//  constructor(props) {
//    super(props);   
//    this.state = {
//      date: new Date()
//    }
//  }


//  render() {    
//    return (
//      <div className="Calendar">
//        <ReactCalendar
//          onChange={this.onChange}
//          value={this.state.date}
//        />
//      </div>
//    );
//  }
//}

