// src/components/About/index.js
import React, { Component } from 'react';
import './users.css';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            loading:false,  
            error:null         
        };     
      }
     componentDidMount() {
        console.log('Component DID MOUNT!')
        debugger;
        this.setState({loading:true});
        
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        // .then(res => {
        //  debugger; 
        //   const persons = res.data;
        //   this.setState({ loading: false, users: persons });
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //     this.setState({ loading: false, error: error });
        //   })       
     }

  render() {    
    return (     
        <div className="BOS_Profile">
        <div className="container">
            <div className="header">
                <h2>Logo</h2>
            </div>
            <div className="main_body">           
                <div className="right">
                    <div className="row">                                   
                        <div className="col-md-12">
                            <div className="row margin0">
                                <div className="col-md-12 margintop15">
                                    <div className="user_profile_outer">
                                        <div className="user_profile_inner"></div>
                                        <button className="btn btn-primary margintop10 marginright5">Edit</button>
                                        <button className="btn btn-primary margintop10">Save</button>
                                    </div>
                                    <div className="username">
                                        <h1>Sharat Chandra <i className="fas fa-user-edit pull-right"></i></h1>
                                        <h3>
                                            Houston
                                        </h3>
                                        <h5>
                                            Heavy Metal
                                        </h5>
                                        <h1>
                                            <i className="fab fa-facebook"></i>
                                            <i className="fab fa-twitter-square"></i>
                                            <i className="fab fa-youtube-square"></i>
                                            <i className="fab fa-linkedin"></i>
                                            <i className="fab fa-pinterest-square"></i>
                                            <i className="fab fa-instagram"></i>
                                        </h1>
                                        <h5>Next Performance: Revention Music Center. 520 Texas St, Houston, TX on 10/15/2018</h5>
                                        <h4>Calendar: <i class="far fa-calendar-alt"></i></h4>
                                    </div>
                                </div>
                                <div className="col-md-12 margintop20">
                                    <h4 className="bigraphy">
                                        Biography
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, est ei partem commune explicari, no vero inani vis. Mei ancillae vituperatoribus id. Has phaedrum moderatius ut. Debitis inimicus scripserit ea eum, pri ea laoreet invidunt salutandi, dolorum offendit pertinax ius no.
                                    </p>
                                    <p>
                                        Cum feugait partiendo te, ius malis albucius posidonium an, has aliquid comprehensam et. At per elitr altera alterum, ea posse repudiare vix. Ne vel ornatus euripidis definitiones. Eirmod diceret minimum nam in. Nobis consul accommodare vel an. Tacimates honestatis eos ea, etiam erroribus per no.

                                        Eum eleifend mandamus maluisset ex. Et libris recteque mea, et vide iuvaret commune sea. Doctus oporteat torquatos eam ea. Nam ut dicant complectitur.
                                    </p>
                                    <p>
                                        Splendide definitionem no quo, modo aliquip vis an, odio solum no duo. Ubique vivendum has ut, consulatu prodesset intellegam ius te, mei utinam comprehensam no. Id per justo dignissim prodesset. Vel dicit saperet denique eu, mea viris noluisse deterruisset ex.

                                        In his habeo error adolescens, nec mucius liberavisse eu. Vix ne quis legimus volumus, et sea paulo ponderum voluptatum, pri paulo delicata no. His et dicant assentior. Offendit invidunt id usu. Ut honestatis dissentiunt vis, nam ei decore tamquam invidunt.
                                    </p>
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
