import React, { useState } from 'react';
import {BrowserRouter as  Router, Switch , Route} from 'react-router-dom';
import LTCardSet from './LTCardSet';
import LTHeader from './LTHeader';
import Article from './Article';

function LawTalk(){
    var [data,setData] = useState([]);
    var [selectedArticle,setSelectedArticle] = useState(0);
    data = [
        {
            post_id:1,
            title: 'Title 1',
            author: 'Author 1',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            disc:'long text 1'
        },
        {
            post_id:2,
            title: 'Title 2',
            author: 'Author 2',
            img: 'https://media.istockphoto.com/photos/summer-background-low-angle-view-of-tropical-palm-trees-over-clear-picture-id1225394367?s=2048x2048',
            disc:'long text 2'
        },
        {
            post_id:3,
            title: 'Title 3',
            author: 'Author 3',
            img: 'https://media.istockphoto.com/photos/majestic-oak-tree-at-autumn-sunset-picture-id1189191651?s=2048x2048',
            disc:'long text 3'
        },
        {
            post_id:1,
            title: 'Title 1',
            author: 'Author 1',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            disc:'long text 1'
        },
        {
            post_id:2,
            title: 'Title 2',
            author: 'Author 2',
            img: 'https://media.istockphoto.com/photos/summer-background-low-angle-view-of-tropical-palm-trees-over-clear-picture-id1225394367?s=2048x2048',
            disc:'long text 2'
        },
        {
            post_id:3,
            title: 'Title 3',
            author: 'Author 3',
            img: 'https://media.istockphoto.com/photos/majestic-oak-tree-at-autumn-sunset-picture-id1189191651?s=2048x2048',
            disc:'long text 3'
        },
        {
            post_id:1,
            title: 'Title 1',
            author: 'Author 1',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            disc:'long text 1'
        },
        {
            post_id:2,
            title: 'Title 2',
            author: 'Author 2',
            img: 'https://media.istockphoto.com/photos/summer-background-low-angle-view-of-tropical-palm-trees-over-clear-picture-id1225394367?s=2048x2048',
            disc:'long text 2'
        },
        {
            post_id:3,
            title: 'Title 3',
            author: 'Author 3',
            img: 'https://media.istockphoto.com/photos/majestic-oak-tree-at-autumn-sunset-picture-id1189191651?s=2048x2048',
            disc:'long text 3'
        },
    ];

    return (
        <>
            <Router>
                <LTHeader />
                <Switch>
                    <Route 
                        path='/lawTalk/article'
                        render={(props)=> <Article {...props} details={data[selectedArticle]}/>}
                    />
                    <Route 
                        path="/lawTalk" 
                        render={(props) => <LTCardSet {...props} cardlist={data}/>} 
                    />
                </Switch>
            </Router>
            
        </>
    );
}

export default LawTalk;
