import React, { Component } from "react";
import axios from 'axios';
import moment from "moment";
import $ from 'jquery';
export default class AddEventForm extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            selection: (props !== undefined && props.selection !== undefined) ? props.selection : undefined,
            isAllDay:false,
            title: '',
            description: '',
            genre: '',
            eventImage: '',
            location: '',
            city: '',
            state: '',
            pincode: '',
            latitude: '',
            longitude: '',
            startDate: (props !== undefined && props.selection !== undefined) ?( moment(props.selection.start).format('YYYY-MM-DD')):"",
            endDate: (props !== undefined && props.selection !== undefined) ? (moment(props.selection.end).format('YYYY-MM-DD')):"",
            startTime: (props !== undefined && props.selection !== undefined) ? ((moment(props.selection.start).format('hA') !== undefined && moment(props.selection.start).format('hA') !== "" && moment(props.selection.start).format('hA') !== "12AM") ? moment(props.selection.start).format('HH:mm') : "08:00") :"08:00",
            endTime: (props !== undefined && props.selection !== undefined) ? ((moment(props.selection.end).format('hA') !== undefined && moment(props.selection.end).format('hA') !== "" && moment(props.selection.end).format('hA') !== "12AM") ? moment(props.selection.end).format('HH:mm') : "09:00") :"09:00",
            email: '',
            phone: '',
            formErrors: {
                title: '',
                description: '',
                genre: '',
                eventImage: '',
                location: '',
                email: '',
                phone: ''
            },
            titleValid: false,
            descriptionValid: false,
            genreValid: false,
            eventImageValid: false,
            locationValid: false,
            emailValid: false,
            phoneValid: false,
            formValid: false,
            autocomplete: null
        };
        this.cancleEventForm = this.cancleEventForm.bind(this);
        this.submitEventForm = this.submitEventForm.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.initAutocomplete = this.initAutocomplete.bind(this); 
        this.fillInAddress = this.fillInAddress.bind(this);   
        this.newEventAddedCallback = this.props.newEventAddedCallback;
        this.updateCalendarState = this.props.updateCalendarState;
    }    
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let descriptionValid = this.state.descriptionValid;
        let genreValid = this.state.genreValid;
        let locationValid = this.state.locationValid;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
        switch (fieldName) {
            case 'title':
                titleValid = (value !== undefined && value !== "" && value.length >= 1) ? true : false;
                fieldValidationErrors.title = (titleValid !== null && titleValid !== undefined) ? '' : 'Please provide Event/Gig title';
                break;
            case 'description':
                descriptionValid = (value !== undefined && value !== "" && value.length >= 1) ? true : false;
                fieldValidationErrors.description = (descriptionValid !== null && descriptionValid !== undefined) ? '' : 'Please provide Event/Gig Description.';
                break;
            case 'genre':
                genreValid = (value !== undefined && value !== "" && value.length >= 1) ? true : false;
                fieldValidationErrors.genre = (genreValid !== null && genreValid !== undefined) ? '' : 'Please provide Genre';
                break;
            //case 'location':
            //    locationValid = (value !== undefined && value !== "" && value.length >= 1) ? true : false;
            //    fieldValidationErrors.location = (locationValid !== null && locationValid !== undefined) ? '' : 'Please provide event location';
            //    break;
            case 'email':
                emailValid = (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== undefined) ? true : false;
                fieldValidationErrors.email = (emailValid !== false && emailValid !== undefined) ? '' : 'Email Id is invalid';
                break;
            case 'phone':
                phoneValid = ((value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) !== null && value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) !== undefined)? true :false );
                fieldValidationErrors.phone = (phoneValid !== false && phoneValid !== undefined) ? '' : 'Phone number is not valid';
                break;
            default:
                break;
        }
        //After validation set state
        this.setState({
            formErrors: fieldValidationErrors,
            titleValid: titleValid,
            descriptionValid: descriptionValid,
            genreValid: genreValid,           
            emailValid: emailValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }
    //set formValid to false if form is not not valid.
    validateForm() {
        this.setState({ formValid: this.state.titleValid && this.state.descriptionValid && this.state.genreValid && this.state.phoneValid && this.state.emailValid });
    }
    //error class to apply to form-group to indicate error
    errorClass(error) {
        if (error !== undefined)
            return (error.length === 0 ? '' : "hasError");
        else
            return '';
    }
    submitEventForm(event) {
        var EventData = {
            title: this.state.title,
            description: this.state.description,
            genre: this.state.genre,
            eventImage: this.state.eventImage,
            location: this.state.location,
            city: this.state.city,
            state: this.state.state,
            pincode: this.state.pincode,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            email: this.state.email,
            phone: this.state.phone,
            start: moment(this.state.startDate + " " + this.state.startTime).toDate(),
            end: moment(this.state.endDate + " " + this.state.endTime).toDate(),
            allDay: this.state.isAllDay 
        };
        var settings = {
            method: "post",
            url: "api/Calendar/Event",
            data: EventData, //JSON.Stringify(loginData)
            headers: { 'Content-Type': 'application/json;utf-8;' }
        };
        //axios.request(settings)
        //    .then(function (response) {
        //        //this.props.history.push(`/target`)
        //        this.context.router.push({
        //            pathname: '/Calendar'
        //        })
        //        console.log(response);
        //    })
        //    .catch(function (error) {
        //        console.log(error);
        //    });
        this.newEventAddedCallback(EventData);
        this.updateCalendarState("addEventForm",false);       
    }
    cancleEventForm(event) {
        window.location.href = window.location.origin + "/Calendar";
    }
    componentDidMount() {    
        this.initAutocomplete();
    }
    initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical location types.
        //Placess closest to you will load first.
        //Ensure you are using google maps places api javascript and valid licensekey from google.
        //Replace the key part with valid key in google maps script url in index.html. You can get one from Google Developer console for free for development.
        if (typeof google !== "undefined" && google.maps !== undefined && google.maps.places !== undefined) {
            var element = new google.maps.places.Autocomplete((document.getElementById('AddressAutocomplete')),
                { types: ['geocode'] });
            // When the user selects an address from the dropdown, populate the address
            // fields in the form.
            element.addListener('place_changed', this.fillInAddress.bind(this));
            this.setState({
                autocomplete: element
            });
        }
        else {
            //$("#AddressAutocomplete").addClass("none");
        }
    }
    fillInAddress() {
        this.setState({
            location: $("#AddressAutocomplete")[0].value
        });
        //Based on req you can auto populate form fields like city state street address etc.
        //all u need to do is add data-attribute like data-street_number,data-route, data-locality.
        //fallowing below are data returned by google maps places API.
        var componentForm = {
            //street_number: 'short_name',
            //route: 'long_name',
            //sublocality_level_1: 'long_name',
            locality: 'long_name',
            //administrative_area_level_2: 'long_name',
            administrative_area_level_1: 'long_name',
            //country: 'long_name',
            postal_code: 'short_name'
        };
        //clear address fields each time new place is selected from google palaces api.
        //add this class to address related form fields in AddEvent form. 
        // To clear filled in data when ever new place is selected.
        $(".clear_address").val("");
        //    // Get the place details from the autocomplete object.
        //var event = document.createEvent("HTMLEvents");
        //event.initEvent("change", true, true);      
        var event = new Event('change', { bubbles: true });
        //Toggle simulated=false and will not trigger the value change
        event.simulated = true;
        var place = this.state.autocomplete.getPlace();
        for (var component in componentForm) {
            if ($("[data-" + component + "]") !== undefined) {
                $("[data-" + component + "]")[0].value = '';
                $("[data-" + component + "]")[0].disabled = false;
                $("[data-" + component + "]")[0].dispatchEvent(event);
                //.trigger('change');
            }
        }
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                if ($("[data-" + addressType + "]") !== undefined)
                    $("[data-" + addressType + "]")[0].value = $("[data-" + addressType + "]")[0].value + " " + val;
                if (val !== "" && val !== undefined && val !== null)
                    $("[data-" + addressType + "]")[0].dispatchEvent(event);
                //.trigger('change');
            }
        }
        this.setState({
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
        });
        if ($("#AddressAutocomplete") !== undefined && $("#AddressAutocomplete")[0] !== undefined)
        $("#AddressAutocomplete")[0].dispatchEvent(event);
    }
    render() {
        return (            
                <div className="calendar_edit">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>
                                Create / Edit Event
                            </h3>
                            <div className={`form-group`}>
                                <label htmlFor="Event">Event Title:</label>
                            <input type="text" className={`form-control ${this.errorClass(this.state.formErrors.title)}`} id="inputTitle" name="title" placeholder="Title"
                                    value={this.state.title} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                            <div className={`form-group`}>
                                <label htmlFor="Description">Description:</label>
                            <textarea className={`form-control ${this.errorClass(this.state.formErrors.description)}`} rows="5" name="description" id="inputDescription" placeholder="Description"
                                    value={this.state.description} onChange={(event) => this.handleUserInput(event)}></textarea>
                            </div>
                            <div className={`form-group`}>
                                <label htmlFor="Genre">Genre:</label>
                            <select className={`form-control ${this.errorClass(this.state.formErrors.genre)}`} name="genre" className="form-control" id="inputGenre" placeholder="Genre" value={this.state.genre} onChange={(event) => this.handleUserInput(event)}>
                                    <option>-- Select Genre --</option>
                                    <option>Heavy Metal</option>
                                    <option>Rock</option>
                                    <option>Pop</option>
                                    <option>Country</option>
                                </select>
                            </div>
                            <div className={`form-group`}>
                                <label htmlFor="Event">Event Image (Type the URL below):</label>
                                <input type="text" className="form-control" name="eventImage" className="form-control" id="inputEventImage" placeholder="Event Image" value={this.state.eventImage} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                            <div className={`form-group`}>
                                <label htmlFor="location">Event Location</label>
                                <input type="text" className="form-control" name="location" className="form-control" id="AddressAutocomplete" placeholder="Event Location" />
                            </div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group" >
                                    <label htmlFor="City">City:</label>
                                    <input type="text" className="form-control clear_address" name="city" className="form-control" id="inputCity" data-locality placeholder="City" data-locality onChange={(event) => this.handleUserInput(event)} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                    <div className="form-group" >
                                        <label htmlFor="State">State:</label>
                                        <input type="text" className="form-control clear_address" name="state" className="form-control" id="inputState" data-administrative_area_level_1 placeholder="State" onChange={(event) => this.handleUserInput(event)} />
                                    </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group" >
                                    <label htmlFor="Pincode">Pincode:</label>
                                    <input type="text" className="form-control clear_address" name="pincode" className="form-control" id="inputPincode" data-postal_code placeholder="Pincode" data-postal_code onChange={(event) => this.handleUserInput(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                            <label htmlFor="startDate">Start Date:</label>
                            <input className="form-control" name="startDate" type="date" value={this.state.startDate} onChange={(event) => this.handleUserInput(event)} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                            <label htmlFor="endDate">End Date:</label>
                            <input className="form-control" name="endDate" type="date" value={this.state.endDate} onChange={(event) => this.handleUserInput(event)}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="startTime">Start Time:</label>
                            <input className="form-control" name="startTime" type="time" value={this.state.startTime} onChange={(event) => this.handleUserInput(event)} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="endTime">End Time:</label>
                            <input className="form-control" name="endTime" type="time" value={this.state.endTime} onChange={(event) => this.handleUserInput(event)}/>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={`form-group`}>
                                <label htmlFor="email">Email:</label>
                            <input type="email" name="email" className={`form-control ${this.errorClass(this.state.formErrors.email)}`} id="inputEmail" placeholder="Email"
                                    value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`form-group`}>
                                <label htmlFor="phone">Phone:</label>
                            <input type="number" name="phone" className={`form-control ${this.errorClass(this.state.formErrors.phone)}`} id="inputLocation" placeholder="Phone"
                                    value={this.state.phone} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                        <input type="button" value="Cancel" className="btn btn-danger margintop10 marginbottom15 marginright5 addedit_close" onClick={(event)=>this.cancleEventForm(event).bind(this)} /> 
                        <input type="button" value="Save" className="btn btn-danger margintop10 marginbottom15" disabled={!this.state.formValid} onClick={(event) => this.submitEventForm(event)}/>
                        </div>
                    </div>
            </div>
        );
    }
}
