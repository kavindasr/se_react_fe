import React, { Component } from 'react'
import { Container,Col,Row, Media} from 'react-bootstrap';
import { FaHandsHelping,FaTaxi} from 'react-icons/fa';
import "./Home.css"

class Home extends Component{
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
                        <p className='Description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eius dolorum deserunt. Vero pariatur dolorem voluptas accusamus consequatur, odit vel vitae ut iusto? Fugiat, corporis a inventore consequatur officia sunt?</p>
                        <div className="Buttondiv">
                            <button type="button" className="button1" onclick="window.location.href='/EmergencyNumbers'">Emergency<br/><FaTaxi/></button>
                            <button type="button" className="button2" onclick="window.location.href='/page2'">Help<br/><FaHandsHelping /></button>
                        </div>
                        <div className="numberdiv">
                            <h2 style={{color:"white", fontsize:60, padding:0}}><strong>CALL US -119</strong></h2>
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