import React, {Component} from 'react';
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./ComplaintForm.css";

class ComplaintForm extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="LeftCol" lg={6}>
                        <Media>
                            <Media.Body>
                                <h1 style={{color: 'white',paddingLeft:"20%",paddingRight:"20%",paddingTop:"10%",paddingBottom:"10%"}}>Register your<br/> complaint</h1>
                                <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae eveniet in molestias, incidunt perferendis ipsum molestiae, adipisci autem aut alias necessitatibus animi temporibus, maxime rerum nesciunt! Facere, dolore voluptatem?</p>
                                <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}><strong>DISCLAIMER:</strong><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum, provident soluta, natus facilis ut repudiandae qui perspiciatis inventore possimus veritatis ea voluptates culpa tenetur, rerum doloribus ducimus corporis dolorem.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa corporis officiis molestiae cupiditate minus ducimus odit numquam itaque maxime vero consequatur, atque expedita dolorem suscipit explicabo id adipisci repellendus.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col className="RightCol"  lg={6}>
                        <Media>
                            <Media.Body>
                                <h2 style={{paddingLeft:"20%",paddingRight:"20%",paddingTop:"5%",paddingBottom:"5%"}}>Online Complaint</h2>
                                <div className="form">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputName">Full name</label>
                                                <input type="text" className="form-control" id="inputName" placeholder="Full name" />
                                            </div>
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
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputLocation">Location</label>
                                                <input type="text" className="form-control" id="inputLocation" placeholder="Location" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Complaint</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} defaultValue={""} />
                                        </div>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" htmlFor="customFile">Select files to upload(Max 5MB)</label>
                                        </div>
                                    </form>
                                </div>
                                <br />
                                <p>
                                    I certify the infromation provided by me in above form is accurate and correct as per best of my knowledge.I understand that withholding of information or giving false information is a criminal offense and may result in legal action against me
                                </p>
                                <input className="btn btn-outline-primary" type="reset" value="Reset"></input>
                                <input className="btn btn-primary" type="submit" value="Submit"></input>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ComplaintForm;