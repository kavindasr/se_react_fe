import React, { useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import SubmitForm from './SubmitForm';

function IrcCard({id,fname,lname,img,last_seen,description}){
    const [isClicked,setClick] = useState(false);
    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Header>{last_seen}</Card.Header>
                <Card.Body>
                    <Card.Title>Name : {fname+" "+lname}</Card.Title>
                    <Card.Subtitle>IRC identification number :{id}</Card.Subtitle>
                    <Card.Text><br/><b>Description :</b>{description}</Card.Text>
                    <Button variant='warning' onClick={()=>setClick(true)}>Report</Button>
                </Card.Body>
                {renderForm(isClicked,id,setClick)}   
            </Card>
        </>
    );

}

function renderForm(isClicked,id,setClick){
    if(isClicked){
        return (
            <Card.Footer>
                <SubmitForm 
                    id={id} 
                    handleClick={setClick}
                />
            </Card.Footer>
        );
    }
}

export default IrcCard;