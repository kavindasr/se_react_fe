import React, { Component , useState} from 'react'
import {withRouter} from 'history/createBrowserHistory'
import { Container,Col,Row, Media, Navbar} from 'react-bootstrap';
import { FaHandsHelping,FaTaxi} from 'react-icons/fa';
import Aboutus from '../Aboutus/Aboutus';
import Emergency from '../Emergency/Emergency';
import "./Home.css"

class Home extends Component{
    
     
    clickHandler1=()=>{
        this.props.history.push("/EmergencyNumbers");
        console.log("Button clicked");    
    } 

    clickHandler2=()=>{
        this.props.history.push("/AboutUs");
        console.log("Button clicked");    
    }  

    render(){ 
        return(
            <Container fluid className='home-parent'>
                <Row>
                <Col className='left'>
                    <Media>
                        <Media.Body>
                        <h1 className='heading'>CRIME WATCH</h1>
                        <h1 className='heading' style={{color:"navy", fontSize:70 , paddingBottom:0, paddingleft:10} }>You are<br/>Safe!<br/></h1>
                        <div className="hline"><hr style={{height: '10px', backgroundColor: '#f70d1a',paddingLeft:"20px"}} /></div>
                        <p className='Description'>We provide legal solutions and practical, reliable sevice to get justice without any fear for those who have faced many struggles.</p>
                        <div className="BottomDiv">
                            <div className="Buttondiv">
                                <button type="success" className="button1" onClick={this.clickHandler1}>Emergency<br/><FaTaxi/></button>
                                <button type="success" className="button2" onClick={this.clickHandler2}>Help<br/><FaHandsHelping /></button>
                            </div>
                            <div className="numberdiv">
                                <h2 style={{color:"white", fontsize:60, padding:0}}><strong>CALL US -119</strong></h2>
                            </div>
                        </div>
                        </Media.Body>
                    </Media>    
                </Col>
                <Col className='right'></Col>
            </Row>
            </Container>
        )
    }
} 

export default Home;
