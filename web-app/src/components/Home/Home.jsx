import React, { Component } from 'react'
import { Alert } from 'react-bootstrap';
import { FaUnderline } from 'react-icons/fa';
import "./Home.css"

class Home extends Component{
    render(){
        return(
            <div className='home-parent'>
                <div className='left'>
                    <div className='section-A'>
                        <h1 className='heading'>CRIME WATCH</h1>
                        <div className='title'>
                            <h1 className='heading' style={{color:"navy", fontSize:70 , paddingBottom:0, paddingleft:10} }>You are<br/>Safe!<br/></h1>
                            <div className='redline'></div>
                            <p className='Description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eius dolorum deserunt. Vero pariatur dolorem voluptas accusamus consequatur, odit vel vitae ut iusto? Fugiat, corporis a inventore consequatur officia sunt?</p>
                        </div>
                    </div>
                    <div className='section-B' role="button">
                        <div className='section-B-left'role="button">
                            <h1 style={{textAlign:'center', padding:0, }}>EMERGENCY</h1>
                        </div>
                        <div className='section-B-right' role="button">
                            <h1 style={{textAlign:'center', padding:0,}}>HELP</h1>
                        </div>
                    </div>
                    <div className='section-c'>
                        <h2 style={{color:"white", fontsize:60, padding:0}}><strong>CALL US -119</strong></h2>    
                    </div>
                </div>
                <div className='right'></div>
            </div>
        )
    }
} 

export default Home;