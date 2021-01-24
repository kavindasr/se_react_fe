import React, { Component,useState } from 'react'
import {Container, Row,Col,Media} from 'react-bootstrap';
import "./UserRegistration.css"

function UserReg(){
    const [inp1,setInp1] = useState('');
    const [inp2,setInp2] = useState('');
    const [inp3,setInp3] = useState('');
    const [inp4,setInp4] = useState('');
    const [inp5,setInp5] = useState('');
    const handleSub =async (event)=>{
        event.preventDefault();
        try{
            const res = await fetch(process.env.REACT_APP_API_HOST+'/api/register',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nic:inp2,
                    first_name:inp1,
                    last_name:"",
                    email:inp4,
                    password:inp5,
                    mobile:inp3,
                    level:"0",
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
        }
        catch(e){
            console.log('Error');
        }
    }
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
                            <form onSubmit={handleSub}>
                                <div className="form-row" style={{paddingTop:"3%"}}>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">Full name</label>
                                        <input onChange={(event)=>setInp1(event.target.value)} type="text" className="form-control" id="inputName" placeholder="First name" />
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
                                        <input onChange={(event)=>setInp3(event.target.value)} type="text" className="form-control" id="inputContactnumber" placeholder="Contact number" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputID">E-Mail</label>
                                        <input onChange={(event)=>setInp4(event.target.value)} type="email" className="form-control" id="inputID" placeholder="E-Mail" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input onChange={(event)=>setInp5(event.target.value)} type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
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

export default UserReg;
