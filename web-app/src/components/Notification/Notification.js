import io from 'socket.io-client';
import {React,useEffect,useState} from 'react';
import Ntoast from './Ntoast';
import { useCookies} from 'react-cookie';
import './noti_style.css';

let socket;

function Notification(){
    const [cookies,setCookie]= useCookies(['token']);
    const [toastArr,setToastArr] = useState([]);
    const [token,setToken] = useState('');
    //setToastArr([...toastArr,...[{user:'KSR',stime: new Date().getTime()}]])

    useEffect(()=>{
        setToken(cookies.token,'Cooookie')
        socket = io(process.env.REACT_APP_API_HOST,{
            auth: {
              token: token
            }
        });
        socket.on('report',(data)=>{
            setToastArr([...toastArr,...[data]])
        })
    },[token]);

    return (
        <>
            <div className={'div-conainer'}>
                {
                    toastArr.map((tst,id)=>{
                        return (
                            <Ntoast 
                                key= {id}
                                user = {tst.user}
                                stime = {tst.stime}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}

export default Notification;