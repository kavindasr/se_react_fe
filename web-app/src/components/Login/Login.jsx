import {React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import "./Login.css"

function LoginForm({handleLog}){
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const history = useHistory();
    const [cookie,setCookie] = useCookies(['loggedIn']);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(process.env.REACT_APP_API_HOST+'/api/login');
        try{
            const res = await fetch(process.env.REACT_APP_API_HOST+'/api/login',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nic:email,
                    password:pass
                })
            });
            const data = await res.json();
            if(data.status == 'error'){
                alert(data.message);
            }
            else if(data.error){
                alert(data.error);
            }
            else{
                setCookie('loggedIn', {level:data.level, id:data.id, nic:email}, { path: '/' });
                handleLog(data.level);
                if(data.level == 1){
                    history.push('/lawyer');
                }
                if(data.level == 2){
                    history.push('/police');
                }
                if(data.level === 0){
                    history.push('/');
                }
                
            }
        }
        catch(e){
            console.log(e.message)
        }
        

    }

    return (
        <div className="page">
            <Form className="Form" onSubmit={handleSubmit}>
                <h1 className = 'heading1' >Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className = 'form-label'>NIC number</Form.Label>
                    <Form.Control onChange={(event)=>setEmail(event.target.value)} type="text" placeholder='Enter Your NIC' size = 'lg' />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className = 'form-label'>Password</Form.Label>
                    <Form.Control onChange={(event)=>setPass(event.target.value)} type='password' placeholder='Enter Your Password' size = 'lg'/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Button type="submit">Log in</Button>
            </Form>   
        </div>
    );
}

export default LoginForm;
