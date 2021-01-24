import React, { Component, useState } from 'react'
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./RegistrationForm.css"

function Registration() {
    const [inp1,setInp1] = useState('');
    const [inp2,setInp2] = useState('');
    const [inp3,setInp3] = useState('');
    const [inp4,setInp4] = useState('');
    const [inp5,setInp5] = useState('');
    const [inp6,setInp6] = useState('');
    const [inp7,setInp7] = useState('');
    
     const handleSub =async (event)=>{
        event.preventDefault();
        try{
            const res = await fetch(process.env.REACT_APP_API_HOST+'/api/register',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nic:inp3,
                    first_name:inp1,
                    last_name:inp2,
                    email:inp5,
                    password:inp6,
                    mobile:inp4,
                    level:inp7,
                    status:"0"
                })
            })
            const data =await res.json();
            console.log(data,data.msg);
            if(data.msg == "Success"){
                alert('Registered successfully!');
            }
            else{
                alert('Somthing went wrong!')
            }
            setInp1('');
            setInp2('');
            setInp3('');
            setInp4('');
            setInp5('');
            setInp6('');
            setInp7('');
        }
        catch(e){
            console.log('Error');
        }
    }
    return(
        <Container fluid>
        <Row>
            <Col className="LeftColmn" lg={6}>
                <Media>
                    <Media.Body>
                        <h1 style={{color: 'white',paddingLeft:"20%",paddingRight:"20%",paddingTop:"10%",paddingBottom:"10%"}}>All information on this form is strictly confidential</h1>
                        <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}>Registration process will be done with highly ensuring your privacy.</p>
                        <p style={{color: 'white',paddingLeft:"20%",paddingRight:"20%"}}><strong>DISCLAIMER:</strong><br/>CrimeWatch has made every attempt to ensure the accuracy and reliability of the information provided on this web site. However the information is provided as is with warranty.<br/><br/> CrimeWatch accept all the responsibilities and liabilities for the accuracy, content, completeness,legality and reliability of the information contained on this website</p>
                    </Media.Body>
                </Media>
            </Col>
            <Col className="RightCol"  lg={6}>
                <Media>
                    <Media.Body>
                        <h2 className="registration-main" style={{paddingTop:"2%"}}>Registration</h2>
                        <div className="form">
                            <form onSubmit={handleSub}>
                                <div className="form-row" style={{paddingTop:"3%"}}>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">First name</label>
                                        <input onChange={(event)=>setInp1(event.target.value)} type="text" className="form-control" id="inputName" placeholder="First name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">Last name</label>
                                        <input onChange={(event)=>setInp2(event.target.value)} type="text" className="form-control" id="inputName" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputID">ID number</label>
                                        <input onChange={(event)=>setInp3(event.target.value)} type="text" className="form-control" id="inputID" placeholder="ID number" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputContactnumber">Contact number</label>
                                        <input onChange={(event)=>setInp4(event.target.value)} type="text" className="form-control" id="inputContactnumber" placeholder="Contact number" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputID">E-Mail</label>
                                        <input onChange={(event)=>setInp5(event.target.value)} type="text" className="form-control" id="inputID" placeholder="E-Mail" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input onChange={(event)=>setInp6(event.target.value)} type="text" className="form-control" id="inputPassword" placeholder="Password" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputLevel">Level</label>
                                            <select onChange={(event)=>setInp7(event.target.value)}class="form-control" id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                    </div>
                                </div>
                                    <br />
                            <input className="btn btn-outline-primary" type="reset" value="Reset"></input>
                            <input className="btn btn-outline-danger waves-effect" type="submit" value="Submit"></input>
                            </form>
                        </div>
                        
                    </Media.Body>
                </Media>
            </Col>
        </Row>
    </Container>
    )
}

export default Registration;

