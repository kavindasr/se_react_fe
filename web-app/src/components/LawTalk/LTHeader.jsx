import React from 'react';
import {Card} from 'react-bootstrap';
import img from './img/law-2_cover.jpg';

function LTHeader(){
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src={img} alt="Card image" style={{overflow:'hidden'}}/>
                <Card.ImgOverlay>
                    <Card.Title>Law Talks</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default LTHeader;