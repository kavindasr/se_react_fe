import React from 'react';
import {Card} from 'react-bootstrap';

const styleCa = {margin:'auto',width:'80%', padding: '10px'};

function Article({details}){
    return (
        <>
            <Card style={styleCa}>
                <Card.Img variant="top" src={details.img} />
                <Card.Header as="h2">{details.title}</Card.Header>
                <Card.Subtitle className="mb-2 text-muted">Written by :{details.author}</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        {details.disc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Article;