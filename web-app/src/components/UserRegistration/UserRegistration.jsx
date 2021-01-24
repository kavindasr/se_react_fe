import React, { Component,useState } from 'react'
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./UserRegistration.css"

function UserReg(){
    const [inp1,setInp1] = useState('');
    const [inp2,setInp2] = useState('');
    const [inp3,setInp3] = useState('');
    const [inp4,setInp4] = useState('');
    const [inp5,setInp5] = useState('');
    return(
        <Container fluid>
        <Row>
            <Col className="LColmn" lg={6}>
                <Media>
                    <Media.Body>
                        <h1 style={{color: 'black',paddingLeft:"20%",paddingRight:"20%",paddingTop:"10%",paddingBottom:"10%"}}>Create Your Own Account</h1>
                        <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}>Registration process will be done with highly ensuring your privacy.</p>
                        <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}><strong>DISCLAIMER:</strong><br/>CrimeWatch has made every attempt to ensure the accuracy and reliability of the information provided on this web site. However the information is provided as is with warranty.<br/><br/> CrimeWatch accept all the responsibilities and liabilities for the accuracy, content, completeness,legality and reliability of the information contained on this website</p>
                    </Media.Body>
                </Media>
            </Col>
            <Col className="RColmn"  lg={6}>
                <Media>
                    <Media.Body>
                        <h2 className="registration-main" style={{paddingTop:"2%"}}>User Registration</h2>
                        <div className="form">
                            <form>
                                <div className="form-row" style={{paddingTop:"3%"}}>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">Full name</label>
                                        <input onChange={(event)=>setInp1(event.target.value)} type="text" className="form-control" id="inputName" placeholder="First name"  minlength="2" maxlength="10" size="12"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputID">ID number</label>
                                        <input onChange={(event)=>setInp2(event.target.value)} type="text" className="form-control" id="inputID" placeholder="ID number" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputContactnumber">Contact number</label>
                                        <input onChange={(event)=>setInp3(event.target.value)} type="text" className="form-control" id="inputContactnumber" placeholder="Contact number" maxlength="10"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputID">E-Mail</label>
                                        <input onChange={(event)=>setInp4(event.target.value)} type="text" className="form-control" id="inputID" placeholder="E-Mail" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input onChange={(event)=>setInp5(event.target.value)} type="text" className="form-control" id="inputPassword" placeholder="Password" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputLevel">Level</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>0</option>
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

export default UserReg;
