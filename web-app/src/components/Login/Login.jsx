import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomForm from './CustomForm';
import "./Login.css"

class LoginForm extends CustomForm {
    
    render() {
        return (
            <div className="page">
                <Form className="Form">
                    <h1 className = 'heading1' >Login</h1>
                    {this.renderFormInput(
                        {   controlId: "formBasicEmail", 
                            label: "Email Address", 
                            type:'email', 
                            placeholder:'Enter Your Email',
                            size: 'lg'
                    
                        }) 
                    }
                    {this.renderFormInput(
                        {   controlId: "formBasicPassword", 
                            label: "Password", 
                            type:'password', 
                            placeholder:'Enter Your Password', 
                            size: 'lg'
                        }) 
                    }
                    <Button>Log in</Button>
                </Form>   
            </div>
        );
    }
}

export default LoginForm;
