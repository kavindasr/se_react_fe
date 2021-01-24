import React, {Component} from 'react';
import "./Emergency.css";
import {Container, Row,Col,Media} from 'react-bootstrap';

const styleObj = {fontSize: 50,color: "white",paddingLeft:"26%",paddingRight:"20%",paddingTop:"20%"}
const styleObject = {color: "white",paddingLeft:"20%",paddingRight:"20%",paddingTop:"10%"}
const stylenum = {fontSize: 40,color:"white",paddingLeft:"20%"}
const stylediv1 = {lineHeight: "18px",backgroundColor: '#f88379'}
const stylediv2 = {lineHeight: "18px",backgroundColor: '#FF4500',textAlign:"left"}

class Emergency extends Component {
    render() {
        return (
            <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <Row noGutters>
                    <Col className="LeftColumn" lg={6}>
                        <Media>
                            <Media.Body>
                                <div className="vline"></div>
                                <h1 style={styleObj}>Emergency Numbers</h1>
                                <p style={styleObject}><strong>Any kind of emergency can be informed through emergency numbers which are available 24 hours a day, 7 days a week.You will be respond within few minutes.</strong></p>
                            </Media.Body>
                       </Media>
                     </Col>
                    <Col className="RightColumn" lg={6}> 
                        <div class="container-fluid">
                            <div class="row">
                            <div className="col-sm-6" style={stylediv1}>
                                <p style={stylenum}>110</p><p style={styleObject}>Ambulance</p>   
                            </div>
                            <div className="col-sm-6" style={stylediv2}>
                            <p style={stylenum}>111</p><p style={styleObject}>Fire and Rescue</p>    
                            </div>
                            <div className="col-sm-6" style={stylediv2}>
                                <p style={stylenum}>1933</p><p style={styleObject}>Sri Lanka Police Department(CID Operations unit)</p>    
                            </div>
                            <div className="col-sm-6" style={stylediv1}>
                                <p style={stylenum}>119</p><p style={styleObject}>Police Emergency Service</p>    
                            </div>
                            <div className="col-sm-6" style={stylediv1}>
                                <p style={stylenum}>118</p><p style={styleObject}>National Help Desk(Ministry Of Defence)</p>  
                            </div>
                            <div className="col-sm-6" style={stylediv2}>
                                <p style={stylenum}>115</p><p style={styleObject}>Colombo Municipal Council-Operation Unit</p>   
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
    
        );
        }
    }
    export default Emergency;
