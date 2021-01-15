import React, {Component} from 'react';
import { FaRegHourglass } from 'react-icons/fa';
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./Aboutus.css";

const styleObj = {fontSize: 50,color: "#000072",paddingLeft:"30%",paddingRight:"20%",paddingTop:"26%"}
const styleob = {paddingLeft:"20%",paddingRight:"20%",paddingTop:"8%"}

class Aboutus extends Component {
    render() {
        return (
            <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <Row noGutters>
                    <Col className="Lcolumn" lg={6}>
                        <div class="vl"></div>
                        <h1 style={styleObj}>WHY WE?</h1>
                        <p style={styleob}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde aut molestiae beatae sed reprehenderit nobis. Totam, dolorem, ad voluptatem officiis obcaecati aliquid hic deserunt voluptatum veniam eos, veritatis aperiam?</p>
                    </Col>
                    <Col className="Rcolumn" lg={6}>
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
                    </Col>
                </Row>
            </Container>
        );
    }
 }
export default Aboutus;