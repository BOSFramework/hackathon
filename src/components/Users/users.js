// src/components/Users/user.js
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import '../../index.css';
import './users.css';
import axios from 'axios';
export default class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            loading:false,  
            error:null         
        };     
      }
     componentDidMount() {
         debugger;
        console.log('Component DID MOUNT!')
        debugger;
        this.setState({loading:true});
        
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
         debugger; 
          const persons = res.data;
          this.setState({ loading: false, users: persons });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            this.setState({ loading: false, error: error });
          })       
     }
     
     
 /* static propTypes = {}
  static defaultProps = {}
  state = {}*/

  render() {
    debugger;
    const { error, loading, users } = this.state;
    if (error!=null) {
        return <div>Error: {error.message}</div>;
      } 
      else if (loading) {
        return <div>Loading...</div>;
      } 
      else {
                return (                             
                <div className="BOS_Profile">
                    <div className="container">
                        <div className="header">
                            <h2>Logo</h2>
                        </div>
                        <div className="main_body">           
                            <div className="right">
                                <div className="row">                                   
                                    <div className="col-md-12 margintop15">                                       
                                        <RenderUserCards users={this.state.users}/>  
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
  
    return ( <div className="row margin0">      
        {props.users.map(user => {
                        var defaultimage=(user!==undefined && user.ImageUrl!==undefined)?'':'/src/components/images/user3.png';
                       return(
                       <div className="col-sm-4 margintop10 marginbottom10">
                                    <div className="BOS_card" key={user.id.toString()}>  
                                                    <div className="user_image" style={{ background:"url('"+defaultimage+"')", backgroundSize:"cover"}}></div>
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
                                                                <i className="fab fa-facebook"></i>
                                                                <i className="fab fa-twitter-square"></i>
                                                                <i className="fab fa-youtube-square"></i>
                                                                <i className="fab fa-linkedin"></i>
                                                                <i className="fab fa-pinterest-square"></i>
                                                                <i className="fab fa-instagram"></i>
                                                            </h2>
                                                            <h5><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="far fa-star grey"></i><span className="reviews">115 reviews</span></h5>
                                                            <h5 className="text-right more_info">More Info</h5>
                                                        </div>
                                                    </div> 
                        
                                    </div>
                        </div>);
        }
               )}
      </div>);
}

