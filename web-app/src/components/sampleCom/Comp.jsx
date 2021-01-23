import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {useCookies} from 'react-cookie';

let socket;

function Comp(){
    const [inp1,setInp1] = useState('');
    const [inp2,setInp2] = useState('');
    const [token,setToken] = useState('');
    const [cookie,setCookie] = useCookies(['token']);

    const hndC1 = ()=>{
        setCookie('token', 'police', { path: '/' });
        setToken('police');
        console.log('Poli awa');
    }
    const hndC2 = ()=>{
        setCookie('token', 'public', { path: '/' });
        setToken('public');
        console.log('Pub awa');
    }
    const hndC3 = ()=>{
        socket.emit('report',{
            user: inp2,
            stime : new Date().getTime()
        })
    }

    useEffect(()=>{
        socket = io(process.env.REACT_APP_API_HOST,{
            auth: {
              token: token
            }
        });
    },[token])

    return (
        <>
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1>Hello!</h1>
                <button onClick={()=>hndC2()}>setUserCookie</button>
                
                <br />
                <button onClick={()=>hndC1()}>setPoliceCokkie</button>
                <br/>
                <button onClick={()=>hndC3()}>Send</button>
                <input onChange={(event)=>setInp1(event.target.value)}/>
                <br/>
                <button>userName</button>
                <input onChange={(event)=>setInp2(event.target.value)}/>
            </div>
        </>
    );
}

export default Comp;
