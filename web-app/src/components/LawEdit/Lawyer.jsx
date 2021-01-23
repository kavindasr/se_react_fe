import {React,useState} from 'react';
import "./style.css";
import Editor from "./Editor";


function Lawyer(){
    
    const onSub = ({body})=>{
        console.log(body);
    }
    return (
        <>
            <div className="form-div">
                <Editor 
                    onSub = {({body})=>onSub({body})}
                />
            </div>
        </>
    );
}



export default Lawyer;