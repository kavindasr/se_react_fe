import React, {Component} from 'react';
import "./Emergency.css";

const styleObject = {color: "white"}
const Sobject = {color: "white",fontSize: 30, top:"20%"}

class Emergency extends Component {
    render() {
        return (
            <div className="parent">
                <div className="parent L"></div>
                    <div class="vl"></div>
                    <div className="content"><p >Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde aut molestiae beatae sed reprehenderit nobis. Totam, dolorem, ad voluptatem officiis obcaecati aliquid hic deserunt voluptatum veniam eos, veritatis aperiam?</p>
                </div>
                <div className="parent R">
                    <div class="container-fluid">
                        <div class="row">
                            <div className="col-sm-6" style={{backgroundColor: '#F08080'}}>
                                <p style={Sobject}>110</p><p style={styleObject}>Ambulance</p>   
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#FF4500'}}>
                                <p style={styleObject}>111<br/>Fire and Rescue</p>    
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#FF4500'}}>
                                <p style={{color:'white',lineHeight:'50px'}}>1933<br/>Sri Lanka Police Department(CID Operations unit)</p>    
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#F08080'}}>
                                <p style={styleObject}>119<br/>Police Emergency Service</p>    
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#F08080'}}>
                                <p style={styleObject}>118<br/>National Help Desk(Ministry Of Defence)</p>  
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#FF4500'}}>
                                <p style={styleObject}>115<br/>Colombo Municipal Council-Operation Unit</p>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        );
        }
    }
    export default Emergency;