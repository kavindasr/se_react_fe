import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import './styles/submit.css';

function SubmitForm({id,handleClick}){
    const [location,setLocation] = useState('');
    const [time,setTime] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id,location,time})
        };
        await fetch(process.env.REACT_APP_API_HOST, requestOptions);
        setLocation('');
        setTime('');
        handleClick(false);
        alert('Reported succuessfully')
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Place you saw the suspect" value={location} onChange={(e)=>setLocation(e.target.value)} required/>
                </Form.Group>
                
                <Form.Group controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" placeholder="Approximate time you saw" value={time} onChange={(e)=>setTime(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="Secondary" type="button" onClick={()=>handleClick(false)}>
                    Cancel
                </Button>
            </Form>
        </>
    );
}

export default SubmitForm;