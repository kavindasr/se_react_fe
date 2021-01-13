import React, {Component} from 'react';
import { FaRegHourglass } from 'react-icons/fa';
import "./Aboutus.css";

const styleObj = {fontSize: 50,color: "#000072",}

class Aboutus extends Component {
    render() {
        return (
            <div className="parent">
                <div className="parent L"></div>
                    <div class="vl"></div>
                    <div className="topic"><h1 style={styleObj}>WHY WE?</h1></div>
                    <div className="content"><p >Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde aut molestiae beatae sed reprehenderit nobis. Totam, dolorem, ad voluptatem officiis obcaecati aliquid hic deserunt voluptatum veniam eos, veritatis aperiam?</p></div>
                <div className="parent R">
                    <div class="container-fluid">
                        <div class="row">
                            <div className="col-sm-6" style={{backgroundColor: '#382044'}}>
                                <p style={{textAlign: 'center' ,color:'white'}}>Emergency service<br/><FaRegHourglass size={40}  /></p>
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#4f3a52'}}>
                                <p style={{textAlign: 'center' ,color:'white'}}>Time serving<br/><FaRegHourglass size={40}  /></p>
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#4f3a52'}}>
                                <p style={{textAlign: 'center' ,color:'white'}}>No expenses<br/><FaRegHourglass size={40}  /></p>
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#382044'}}>
                                <p style={{textAlign: 'center' ,color:'white'}}>Abuse reports<br/><FaRegHourglass size={40}  /></p>
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#382044'}}>
                                <p style={{textAlign: 'center' ,color:'white'}}>From your place<br/><FaRegHourglass size={40}  /></p>
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: '#4f3a52'}}>
                                <p style={{textAlign: 'center' ,color:'white'}}>24x7<br/><FaRegHourglass size={40} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }
export default Aboutus;