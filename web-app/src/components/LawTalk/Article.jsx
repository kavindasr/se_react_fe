import React from 'react';
import {Card} from 'react-bootstrap';
import parse from 'html-react-parser';
const styleCa = {margin:'auto',width:'80%', padding: '10px'};

function Article({details}){
    return (
        <>
            <Card style={styleCa}>
                <Card.Img variant="top" src={details.image} />
                <Card.Header as="h2">{details.title}</Card.Header>
                <Card.Subtitle className="mb-2 text-muted">Written by :{details.author}</Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        {parse(details.article)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Article;