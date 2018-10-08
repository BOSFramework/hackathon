// src/components/Users/user.js
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './users.css';
import Header from '../../components/Layout/header';
import axios from 'axios';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            initial_users:[],
            filterBy:"username",
            loading: false,
            error: null
        };
    }
    componentWillMount() {
        debugger;
        console.log('Component Will MOUNT!')       
    }
    componentDidMount() {
        debugger;
        console.log('Component DID MOUNT!')
        debugger;
        this.setState({ loading: true });

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                debugger;
                const persons = res.data;
                this.setState({ loading: false, users: persons, initial_users: persons });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                this.setState({ loading: false, error: error });
            })
    }
    SetfilterBy(event) {
        debugger;
        var filterBy = event.target.value;        
        this.setState({ filterBy: filterBy });
    }
    filterList(event) {
        
        var updatedList = this.state.initial_users;
        var filterBy = this.state.filterBy;
        updatedList = updatedList.filter(function (item) {           
            return (item != undefined && item[filterBy] != undefined) ? item[filterBy].toLowerCase().search(
                event.target.value.toLowerCase()) !== -1:false;
        });
        debugger;
        if (updatedList != undefined && updatedList.length > 0) {
            this.setState({ users: updatedList });
        }
        else
            this.setState({ users: this.state.initial_users });
    }
    /* static propTypes = {}
     static defaultProps = {}
     state = {}*/

    render() {
        debugger;
        const { error, loading, users } = this.state;
        if (error != null) {
            return <div>Error: {error.message}</div>;
        }
        else if (loading) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="BOS_Profile">
                    <div className="container">
                        <Header />
                        <div className="main_body">
                            <div className="right">
                                <div className="row">
                                    <div className="col-md-12 margintop15">
                                        <div className="row margin0">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-xs-4 pull-right">
                                                        <div className="custom-search-input">
                                                            <div className="input-group col-md-12">
                                                                <input type="text" className=" search-query form-control" placeholder="Search Artists" onChange={this.filterList.bind(this)} />
                                                                <span className="input-group-btn">
                                                                    <button className="btn btn-danger" type="button">
                                                                        <span className="glyphicon glyphicon-search"></span>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3 widthauto pull-right">
                                                        <p>
                                                            <label className="custom-select">
                                                                Filter by:
                                                                         <select onChange={this.SetfilterBy.bind(this)}>
                                                                    <option value="username">Artist Name</option>
                                                                    <option value="genre">Genre</option>
                                                                    <option value="city">Location</option>
                                                                </select>
                                                            </label>
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <RenderUserCards users={this.state.users} />
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

}


//Paint User Cards
export function RenderUserCards(props) {
    debugger;

    return (<div className="row margin0">
        {props.users.map(user => {
            var defaultimage = (user !== undefined && user.ImageUrl !== undefined) ? '' : '/src/components/images/user3.png';
            return (
                <div className="col-sm-4 margintop10 marginbottom10">
                    <div className="BOS_card" key={user.id.toString()}>
                        <div className="user_image" style={{ background: "url('" + defaultimage + "')", backgroundSize: "cover" }}></div>
                        <div className="user_name">
                            <h4>{user.username}</h4>
                            <h5>{user.address.city}</h5>
                            {/*<h5>{user.genre}</h5> user.address.city + ", "+*/}
                            <h4>{user.address.zipcode}</h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="row margin0">
                            <div className="col-md-12">
                                <h2>
                                    <i className="fab fa-facebook"></i>&nbsp;
                                    <i className="fab fa-twitter-square"></i>&nbsp;
                                    <i className="fab fa-youtube-square"></i>&nbsp;
                                    <i className="fab fa-linkedin"></i>&nbsp;
                                    <i className="fab fa-pinterest-square"></i>&nbsp;
                                    <i className="fab fa-instagram"></i>
                                </h2>
                                <h5><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star grey"></i><span className="reviews">6 reviews</span></h5>
                                <h5 className="text-right more_info">More Info</h5>
                            </div>
                        </div>

                    </div>
                </div>);
        }
        )}
    </div>);
}

