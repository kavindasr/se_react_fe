import React, {Component} from 'react';
import "./Emergency.css";

const styleObj = {fontSize: 50,color: "white",}
const styleObject = {color: "white"}
const stylenum = {fontSize: 40,color:"white"}

class Emergency extends Component {
    render() {
        return (
            <div className="parent">
                <div className="parent L-details">
                    <div class="vl"></div>
                    <div className="title"><h1 style={styleObj}>Emergency Numbers</h1></div>
                    <div className="details"><p style={styleObject}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde aut molestiae beatae sed reprehenderit nobis. Totam, dolorem, ad voluptatem officiis obcaecati aliquid hic deserunt voluptatum veniam eos, veritatis aperiam?</strong></p></div>
                </div>
                <div className="parent R">
                    <div class="container-fluid">
                        <div class="row">
                            <div className="col-sm-6" style={{backgroundColor: '#f88379'}}>
                                <p style={stylenum}>110</p><p style={styleObject}>Ambulance</p>   
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#FF4500'}}>
                            <p style={stylenum}>111</p><p style={styleObject}>Fire and Rescue</p>    
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#FF4500'}}>
                                <p style={stylenum}>1933</p><p style={styleObject}>Sri Lanka Police Department(CID Operations unit)</p>    
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#f88379'}}>
                                <p style={stylenum}>119</p><p style={styleObject}>Police Emergency Service</p>    
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#f88379'}}>
                                <p style={stylenum}>118</p><p style={styleObject}>National Help Desk(Ministry Of Defence)</p>  
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#FF4500'}}>
                                <p style={stylenum}>115</p><p style={styleObject}>Colombo Municipal Council-Operation Unit</p>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        );
        }
    }
    export default Emergency;