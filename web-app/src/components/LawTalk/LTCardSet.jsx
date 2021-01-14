import React from 'react';
import { Container} from 'react-bootstrap';
import LTRowSet from './LTRowSet';

const items_in_row = 3;

function LTCardSet({cardlist}){
    const LTRows = [];
    for (var i=0 ; i< cardlist.length ; i+= items_in_row){
        const chunk = cardlist.slice(i,i+items_in_row);
        LTRows.push(chunk);
    }
    console.log(LTRows);

    return (
        <>
            <Container style={{marginTop:'5px'},{marginBottom:'5px'}}> 
                {LTRows.map((row)=>{
                    return (
                        <LTRowSet 
                            rowItems = {row}
                        />
                    );
                })}
            </Container>
            
        </>
    );
}

export default LTCardSet;