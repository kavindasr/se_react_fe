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
        setIrcList(data);
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
                            name = {person.name}
                            img = {person.img}
                            description = {person.description}
                            last_seen = {person.last_seen} 
                        />
                    );
                })}
            </CardColumns>
        </>
    );
}

export default IrcDeck;