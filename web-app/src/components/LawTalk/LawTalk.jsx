import React, { useEffect, useState } from 'react';
import {BrowserRouter as  Router, Switch , Route} from 'react-router-dom';
import LTCardSet from './LTCardSet';
import LTHeader from './LTHeader';
import Article from './Article';

function LawTalk(){
    var [data,setData] = useState([]);
    var [selectedArticle,setSelectedArticle] = useState(0);

    useEffect(()=>{
        const run = async ()=>{
            const res = await fetch(process.env.REACT_APP_API_HOST+"/api/lawyer/laws",{
                method : "GET"
            });
            const data = await res.json();
            console.log(data.laws);
            setData(data.laws)
        }
        run();
    },[])
    const findArticle = ()=>{
        return (data.find(item =>item.id === selectedArticle));
    }

    return (
        <>
            <Router>
                <LTHeader />
                <Switch>
                    <Route 
                        path='/lawTalk/article'
                        render={(props)=> <Article {...props} details={findArticle()}/>}
                    />
                    <Route 
                        path="/lawTalk" 
                        render={(props) => <LTCardSet {...props} cardlist={data} onClickLink={(i)=>setSelectedArticle(i)}/>} 
                    />
                </Switch>
            </Router>
            
        </>
    );
}

export default LawTalk;
