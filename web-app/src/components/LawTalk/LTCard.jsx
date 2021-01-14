import React from 'react';
import { Card} from 'react-bootstrap';

function LTCard({img,title,author}){
    return (
        <>
            <Card style={{ width: '18rem'},{height: '24rem'}, {padding:'5px'}, {margin: '10px'}}>
                <Card.Img variant="top" src={img} alt="img"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <Card.Link href="#">See article</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}
export default LTCard;