import React from 'react';
import { Container} from 'react-bootstrap';
import LTRowSet from './LTRowSet';

const items_in_row = 3;
const styleCon = {marginTop:'5px',marginBottom:'5px'};

function LTCardSet({cardlist, onClickLink}){
    const LTRows = [];
    for (var i=0 ; i< cardlist.length ; i+= items_in_row){
        const chunk = cardlist.slice(i,i+items_in_row);
        LTRows.push(chunk);
    }

    return (
        <>
            <Container style={styleCon}> 
                {LTRows.map((row,id)=>{
                    return (
                        <LTRowSet 
                            key = {id}
                            rowItems = {row}
                            onClickLink = {(i)=>onClickLink(i)}
                        />
                    );
                })}
            </Container>
            
        </>
    );
}

export default LTCardSet;