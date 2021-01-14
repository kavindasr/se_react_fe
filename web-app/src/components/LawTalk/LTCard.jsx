import React from 'react';
import {Link} from 'react-router-dom';
import { Card} from 'react-bootstrap';

const styleCa = {padding:'5px', margin: '10px'}

function LTCard({id,img,title,author,onClickLink}){
    const handle = (e)=>{
        onClickLink(id);
    }
    return (
        <>
            <Card style={styleCa}>
                <Card.Img variant="top" src={img} alt="img"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <Link to="/lawTalk/article" onClick = {handle}>See article</Link>
                </Card.Body>
            </Card>
        </>
    );
}
export default LTCard;