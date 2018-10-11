import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from '../../components/Layout/header';
import './calendar.css';
import AddEventForm from '../../components/Calendar/addEvent';
moment.locale('en-US');
export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    'title': 'My event',
                    'allDay': false,
                    'start': new Date(2018, 9, 8, 10, 0), // 10.00 AM
                    'end': new Date(2018, 9, 8, 14, 0), // 2.00 PM 
                    //allDay?: boolean
                    // resource?: any
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
            ],
            showCalendar: true,
            addEventForm: false
        }
        this.addNewEvent = this.addNewEvent.bind(this);
        this.calendarSlotSelected = this.calendarSlotSelected.bind(this);   
        this.updateState = this.updateState.bind(this);
    }
     //triggered when calender is clicked on selected 
    //used this event to trigger the add event form.
    calendarSlotSelected = (selected) => {        
        //show Add new Event form
        if (this.state.addEventForm=== false) {
            this.setState({
                selection: selected,
                addEventForm: true
            });           
           }           
            else
            this.setState({
                selection: null,
                addEventForm: false
            });       
    }

    //submit function for Add new Event 
    addNewEvent = (eventObj) => {
        //Make ajax call to create calendar event
        //on success update state to update view.
        debugger;
        if (eventObj.title)
            var events = this.state.events;
        events.push(eventObj);
            this.setState({
                events: events,
            })
    };
    updateState = (property,value) => {
        //Make ajax call to create calendar event
        //on success update state to update view.
        debugger;
        if (property !== undefined)
            this.setState({ [property]: value });
    };

    render() {
        return (
           <div className="BOS_Calendar">
                    <div className="container-fluid">
                        <Header />
                        <div className="main_body loggedin">
                            <div className="left">
                                <div className="vertical_navigation">
                                    <i className="far fa-user"></i>
                                    <h5><a href="/Profile">Profile</a></h5>
                                </div>
                                <div className="vertical_navigation selected">
                                    <i className="far fa-calendar-alt"></i>
                                    <h5><a href="/Calendar/Events">Events</a></h5>
                                </div>
                            </div>
                            <div className="right padding20">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="row">   
                                        <div className="col-md-12">
                                            <BigCalendar
                                                localizer={BigCalendar.momentLocalizer(moment)}
                                                selectable={true}
                                                views={{ month: true, week: true, day: true, agenda: true }}
                                                defaultView="month"
                                                min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
                                                max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
                                                defaultDate={new Date(2018, 9, 8)}
                                                events={this.state.events}
                                                style={{ height: 700 }}
                                                onNavigate={{}}
                                                onSelectEvent={event => alert(event.title)}
                                                onSelectSlot={this.calendarSlotSelected.bind(this)}
                                                popup={true}
                                            />
                                            {(this.state.showCalendar === true &&
                                                this.state.addEventForm === false) ?
                                                "": (<AddEventForm {...this.props} selection={this.state.selection} newEventAddedCallback={this.addNewEvent.bind(this)} updateCalendarState={this.updateState.bind(this)} />)
                                        }
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) 
    }
}

export default Calendar;
