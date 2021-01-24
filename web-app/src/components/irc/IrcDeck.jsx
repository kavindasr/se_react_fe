import React, { useEffect, useState } from 'react';
import {Image, CardColumns} from 'react-bootstrap';
import IrcCard from './IrcCard';
import './styles/style.css';
import cover from './irc_cover.jpg';
//Remove later
import data from './sample.json';
function IrcDeck(){
    const [ircList,setIrcList] = useState([]);
    useEffect(()=>{
        const run = async ()=>{
            const res = await fetch(process.env.REACT_APP_API_HOST+'/api/suspects');
            const data = await res.json();
            console.log(data);
            setIrcList(data.suspects);
        }
        run()
        
    },[]);
    
    return (
        <>
            <Image src={cover} fluid />
            <CardColumns>
                {ircList.map(person =>{
                    return (
                        <IrcCard 
                            key = {person.id}
                            id = {person.id}
                            fname = {person.first_name}
                            lname = {person.last_name}
                            img = {person.image}
                            description = {person.description}
                            last_seen = ""
                        />
                    );
                })}
            </CardColumns>
        </>
    );
}

export default IrcDeck;