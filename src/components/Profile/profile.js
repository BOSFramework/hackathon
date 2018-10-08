// src/components/About/index.js
import React, { Component } from 'react';

import '../Users/users.css';
import Header from '../../components/Layout/header';
class Profile extends Component {
    static propTypes = {}
    static defaultProps = {}
    state = {}

    render() {
        return (
            <div className="BOS_Profile">
                <div className="container-fluid">
                    <Header/>

                    <div className="main_body loggedin">
                        <div className="left">
                            <div className="vertical_navigation selected" onClick="window.location = '/Profile'">
                                <i className="far fa-user"></i>
                                <h5>Profile</h5>
                            </div>
                            <div className="vertical_navigation" onClick="window.location = '/Calendar'">
                                <i className="far fa-calendar-alt"></i>
                                <h5>Events</h5>
                            </div>
                        </div>
                        <div className="right">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row margin0">

                                        <div className="col-md-6 margintop15 col-md-offset-3">
                                            <div className="form-group">
                                                <label for="Name">Name:</label>
                                                <input type="text" className="form-control" id="Name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="City">City:</label>
                                                <select className="form-control" id="City">
                                                    <option>-- Select City --</option>
                                                    <option>New York</option>
                                                    <option>Los Angeles</option>
                                                    <option>Washington</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="Bio">Bio:</label>
                                                <textarea className="form-control" rows="5" id="Bio"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="UserType">User Type:</label>
                                                <select className="form-control" id="UserType">
                                                    <option>-- Select User Type --</option>
                                                    <option>Artist</option>
                                                    <option>Promoter</option>
                                                    <option>Scout</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="Genre">Genre:</label>
                                                <select className="form-control" id="Genre">
                                                    <option>-- Select Genre --</option>
                                                    <option>Heavy Metal</option>
                                                    <option>Rock</option>
                                                    <option>Pop</option>
                                                    <option>Country</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="Youtube">Youtube Channel <i className="fab fa-youtube-square"></i> :</label>
                                                <input type="text" className="form-control" id="Youtube" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Facebook">Facebook Page <i className="fab fa-facebook"></i> :</label>
                                                <input type="text" className="form-control" id="Facebook" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Twitter">Twitter Handle <i className="fab fa-twitter-square"></i> :</label>
                                                <input type="text" className="form-control" id="Twitter" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Linkedin">Linkedin Account <i className="fab fa-linkedin"></i> :</label>
                                                <input type="text" className="form-control" id="Linkedin" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Pinterest">Pinterest Account <i className="fab fa-pinterest-square"></i> :</label>
                                                <input type="text" className="form-control" id="Pinterest" />
                                            </div>
                                            <div className="form-group">
                                                <label for="Instagram">Instagram Account <i className="fab fa-instagram"></i> :</label>
                                                <input type="text" className="form-control" id="Instagram" />
                                            </div>
                                            <div className="form-group text-center">
                                                <input type="button" className="btn btn-danger margintop10 marginright5" value="Cancel" />
                                                <input type="button" className="btn btn-danger margintop10" value="Save" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;