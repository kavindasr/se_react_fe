import React from 'react';
import {Row,Col} from 'react-bootstrap';
import LTCard from './LTCard';

function LTRowSet({rowItems,onClickLink}){
    return (
        <>
            <Row>
            {rowItems.map((item,id)=>{
                return(
                    <>
                        <Col md={4} >
                            <LTCard 
                                key = {id}
                                id = {item.id}
                                img={item.image}
                                title={item.title}
                                author={item.author}
                                onClickLink = {(i)=> onClickLink(i)}
                            />
                        </Col>
                    </>
                );
            })}
            </Row>
        </>
    );
}

export default LTRowSet;