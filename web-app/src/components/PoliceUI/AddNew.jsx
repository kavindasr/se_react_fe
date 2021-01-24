import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function AddNew(){
    const [fn,setFn] = useState('');
    const [ln,setLn] = useState('');
    const [des,setDes] = useState('');
    const [url,setUrl] = useState('');
    const [cookies,setCookie] = useCookies(["loggedIn"]);
    const history = useHistory();

    const hSub = async (event)=>{
        event.preventDefault();
        const obj = {
            first_name: fn,
            last_name : ln,
            description : des,
            image : url,
            status: 1,
            police_id: cookies.loggedIn.id
        }
        try{
            const res = await fetch(process.env.REACT_APP_API_HOST+'/api/police/wanteds',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            })
            const data = await res.json();
            if(data.msg == "Added wanted"){
                alert("Successfully added!");
            }
            else{
                alert("Something went wrong!");
            }
            history.push('/police?#/UpdateRIC');
        }
        catch(e){
            console.log("Something went wrong!")
        }
    }
    return (
        <>
            <Form onSubmit={hSub}>
                <Form.Group >
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="first name" onChange={(event)=>setFn(event.target.value)}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" onChange={(event)=>setLn(event.target.value)}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" onChange={(event)=>setDes(event.target.value)}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="URL" onChange={(event)=>setUrl(event.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    ADD
                </Button>
            </Form>
        </>
    );
}

export default AddNew;