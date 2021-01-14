import React from 'react';
import {Row,Col} from 'react-bootstrap';
import LTCard from './LTCard';

function LTRowSet({rowItems}){
    return (
        <>
            <Row>
            {rowItems.map((item,id)=>{
                return(
                    <>
                        <Col md={4}>
                            <LTCard 
                                key = {id}
                                img={item.img}
                                title={item.title}
                                author={item.author}
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