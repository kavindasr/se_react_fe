import React, {Component, useState} from 'react';
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./ComplaintForm.css";

function ComplaintForm(){
    const [inp1,setInp1] = useState('');
    const [inp2,setInp2] = useState('');
    const [inp3,setInp3] = useState('');
    const [inp4,setInp4] = useState('');
    const [inp5,setInp5] = useState('');
    return (
        <Container fluid>
            <Row>
                <Col className="LeftCol" lg={6}>
                    <Media>
                        <Media.Body>
                            <h1 style={{color: 'white',paddingLeft:"20%",paddingRight:"20%",paddingTop:"10%",paddingBottom:"10%"}}>Register your<br/> complaint</h1>
                            <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}>A person can make a complaint about injustice through this without physically going to a police station.</p>
                            <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}><strong>DISCLAIMER:</strong><br/>CrimeWatch has made every attempt to ensure the accuracy and reliability of the information provided on this web site. However the information is provided as is without warranty of any kind.<br/><br/> CrimeWatch does not accept any responsibility or liability for the accuracy, content, completeness,legality or reliability of the information contained on this website</p>
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
                                            <input onChange={(event)=>setInp1(event.target.value)} type="text" className="form-control" id="inputName" placeholder="Full name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputID">ID number</label>
                                            <input onChange={(event)=>setInp2(event.target.value)} type="text" className="form-control" id="inputID" placeholder="ID number" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputContactnumber">Contact number</label>
                                            <input onChange={(event)=>setInp3(event.target.value)} type="text" className="form-control" id="inputContactnumber" placeholder="Contact number" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputLocation">Location</label>
                                            <input onChange={(event)=>setInp4(event.target.value)} type="text" className="form-control" id="inputLocation" placeholder="Location" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Complaint</label>
                                        <textarea onChange={(event)=>setInp5(event.target.value)} className="form-control" id="exampleFormControlTextarea1" rows={4} defaultValue={""} />
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
export default ComplaintForm;
