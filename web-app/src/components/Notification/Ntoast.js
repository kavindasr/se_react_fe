import {React,useEffect,useState} from 'react';
import { Toast } from 'react-bootstrap';
import {BsFillChatQuoteFill} from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
const dtime = 120000; //delay time 2 min

function Ntoast({user,stime}){
    const history = useHistory();
    const [showA, setShowA] = useState(true);
    const [load,setLoad] = useState(true)
    const [ago,setAgo] = useState('just now..')
    const toggleShowA = () => setShowA(!showA);

    const redirect = ()=>{
        history.push('/lawTalk');
        toggleShowA();
    }
    useEffect(()=>{
        if(new Date().getTime() - stime > dtime/2){
            setLoad(false);
        }
        else{
             setTimeout(()=>{
                setAgo('1 min ago');
            },60000);
        }
       
    },[])
    return (
        <>
            {load?(<Toast show={showA} onClose={toggleShowA} delay={dtime} autohide>
                <Toast.Header>
                    <BsFillChatQuoteFill/>
                    <strong className="mr-auto">{"  New complain"}</strong>
                    <small>{ago}</small>
                </Toast.Header>
                <Toast.Body>
                    <div>
                        New complain from : {user}
                    </div>
                    <Link onClick={redirect}>See more</Link>
                </Toast.Body>
            </Toast>):<></>}
        </>
    );
}

export default Ntoast;