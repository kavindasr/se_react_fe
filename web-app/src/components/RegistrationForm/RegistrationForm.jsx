import React, { Component } from 'react'
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./RegistrationForm.css"

class registration extends Component{
    render(){
        return(
            <Container fluid>
            <Row>
                <Col className="LeftColmn" lg={6}>
                    <Media>
                        <Media.Body>
                            <h1 style={{color: 'white',paddingLeft:"20%",paddingRight:"20%",paddingTop:"10%",paddingBottom:"10%"}}>All information on this form is strictly confidential</h1>
                            <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae eveniet in molestias, incidunt perferendis ipsum molestiae, adipisci autem aut alias necessitatibus animi temporibus, maxime rerum nesciunt! Facere, dolore voluptatem?</p>
                            <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}><strong>DISCLAIMER:</strong><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum, provident soluta, natus facilis ut repudiandae qui perspiciatis inventore possimus veritatis ea voluptates culpa tenetur, rerum doloribus ducimus corporis dolorem.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa corporis officiis molestiae cupiditate minus ducimus odit numquam itaque maxime vero consequatur, atque expedita dolorem suscipit explicabo id adipisci repellendus.</p>
                        </Media.Body>
                    </Media>
                </Col>
                <Col className="RightCol"  lg={6}>
                    <Media>
                        <Media.Body>
                            <h2 className="registration-main" style={{paddingTop:"2%"}}>User Registration</h2>
                            <div className="form">
                                <form>
                                    <div className="form-row" style={{paddingTop:"3%"}}>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputName">First name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="First name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputName">Last name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputID">ID number</label>
                                            <input type="text" className="form-control" id="inputID" placeholder="ID number" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputContactnumber">Contact number</label>
                                            <input type="text" className="form-control" id="inputContactnumber" placeholder="Contact number" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputID">E-Mail</label>
                                            <input type="text" className="form-control" id="inputID" placeholder="E-Mail" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword">Password</label>
                                            <input type="text" className="form-control" id="inputPassword" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputLevel">Level</label>
                                                <select class="form-control" id="exampleFormControlSelect1">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <br />
                            <input className="btn btn-outline-primary" type="reset" value="Reset"></input>
                            <input className="btn btn-outline-danger waves-effect" type="submit" value="Submit"></input>
                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default registration;
