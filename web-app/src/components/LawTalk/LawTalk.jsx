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
            disc:`Definition(s) of a constitution
            The Oxford Dictionary defines constitution as “a body of fundamental principles or established precedents according to which a state or other organisation is acknowledged to be governed”5. While this covers the physical notion of a constitution, a constitution also carries political and social elements. Consequently, scholars have claimed that a constitution is one which both displays formal characteristics and is also publicly recognisable6.
            
            Essentially, this means that the constitution has to serve as a mega-structure upon which the entire social and political functions of the order have to depend upon. Thus, the first principal element of a constitution would be to regulate the existence, ambits and exercise of the political power within a stated body. Its second principal element would be to encapsulate the fundamentals of society within that body.
            
            Lisbon Treaty: The Constitution of Europe
            The Libson Treaty is by far one of the most constitutionally powerful and imperative treaties of the EU to date. It seeks to significantly amend the founding treaties of the EU – the Treaty on European Union and the Treaty on the Functioning of the EU. The reforms and objectives of the treaty carry far-reaching impacts on several vital EU institutions and seek to alter/empower their functioning.
            
            One of the fundamental reforms brought forth by the Lisbon Treaty is the expansion of the powers of central EU institutions – the European Parliament and the Court of Justice of the European Union (CJEU). The European Parliament’s ordinary legislative procedure has been amended in order to expand its ambits and play a more central role in the implementation of legislation. In the case of the CJEU, it has been endowed with greater power via extension of its jurisdiction to include justice and home affairs issues, by combining the third pillar with the first.
            
            Another defining feature of the Lisbon Treaty is that it expressively enhances the protection of human rights in the EU. For starters, the Charter of Fundamental Rights of the EU has been made legally binding by the treaty 7. Though this does not introduce any new rights into the regime, the codification of the rights has substantially increased the profile of the protected rights8. Additionally, the Lisbon Treaty makes provision for accession to the European Convention for the Protection of Human Rights and Fundamental Freedoms, thus ensuring consistency between these two regimes of human rights, by subjecting them to the jurisdiction of the European Court of Human Rights9.
            
            Some of the other monumental reforms rendered by the Lisbon Treaty include the granting of a legal personality to the EU10. This carries notable ramifications for the external policies of the EU. The EU is now able to negotiate and officially be a party to international treaties. Thus, its foreign policy has been rendered more coherent by the Lisbon Treaty. The treaty also has endeavoured to successfully streamline the decision-making process within the Council, whereby it has abolished the old system of weighted voting and has replaced it with qualified majority voting for taking important decisions. Finally, the treaty also restates the democratic principles which form the foundation of the EU11.
            
            Hence, given the aforementioned points, it can hardly be disputed that the Lisbon Treaty carries significant importance in the constitutional realm of the EU. Since it establishes and regulates the principal organs of the EU, their structure and powers, the treaty is qualified to be christened as the constitution of Europe12. And if one were to apply the definitions enumerated in the previous section to the Lisbon Treaty, one would construe that the treaty indeed regulates the extent and implementation of political power within the EU and also regulates the social make-up of the institution (democratic nature and foreign policy). Thus it does seem fair, from one vantage point, that the Lisbon Treaty is treated as the constitution of Europe, under a new form.
            
            However, given the depth of the topic, it warrants further investigation of the Lisbon Treaty before drawing a final conclusion.`
        },
        {
            post_id:2,
            title: 'Title 2',
            author: 'Author 2',
            img: 'https://media.istockphoto.com/photos/summer-background-low-angle-view-of-tropical-palm-trees-over-clear-picture-id1225394367?s=2048x2048',
            disc:`Definition(s) of a constitution
            The Oxford Dictionary defines constitution as “a body of fundamental principles or established precedents according to which a state or other organisation is acknowledged to be governed”5. While this covers the physical notion of a constitution, a constitution also carries political and social elements. Consequently, scholars have claimed that a constitution is one which both displays formal characteristics and is also publicly recognisable6.
            
            Essentially, this means that the constitution has to serve as a mega-structure upon which the entire social and political functions of the order have to depend upon. Thus, the first principal element of a constitution would be to regulate the existence, ambits and exercise of the political power within a stated body. Its second principal element would be to encapsulate the fundamentals of society within that body.
            
            Lisbon Treaty: The Constitution of Europe
            The Libson Treaty is by far one of the most constitutionally powerful and imperative treaties of the EU to date. It seeks to significantly amend the founding treaties of the EU – the Treaty on European Union and the Treaty on the Functioning of the EU. The reforms and objectives of the treaty carry far-reaching impacts on several vital EU institutions and seek to alter/empower their functioning.
            
            One of the fundamental reforms brought forth by the Lisbon Treaty is the expansion of the powers of central EU institutions – the European Parliament and the Court of Justice of the European Union (CJEU). The European Parliament’s ordinary legislative procedure has been amended in order to expand its ambits and play a more central role in the implementation of legislation. In the case of the CJEU, it has been endowed with greater power via extension of its jurisdiction to include justice and home affairs issues, by combining the third pillar with the first.
            
            Another defining feature of the Lisbon Treaty is that it expressively enhances the protection of human rights in the EU. For starters, the Charter of Fundamental Rights of the EU has been made legally binding by the treaty 7. Though this does not introduce any new rights into the regime, the codification of the rights has substantially increased the profile of the protected rights8. Additionally, the Lisbon Treaty makes provision for accession to the European Convention for the Protection of Human Rights and Fundamental Freedoms, thus ensuring consistency between these two regimes of human rights, by subjecting them to the jurisdiction of the European Court of Human Rights9.
            
            Some of the other monumental reforms rendered by the Lisbon Treaty include the granting of a legal personality to the EU10. This carries notable ramifications for the external policies of the EU. The EU is now able to negotiate and officially be a party to international treaties. Thus, its foreign policy has been rendered more coherent by the Lisbon Treaty. The treaty also has endeavoured to successfully streamline the decision-making process within the Council, whereby it has abolished the old system of weighted voting and has replaced it with qualified majority voting for taking important decisions. Finally, the treaty also restates the democratic principles which form the foundation of the EU11.
            
            Hence, given the aforementioned points, it can hardly be disputed that the Lisbon Treaty carries significant importance in the constitutional realm of the EU. Since it establishes and regulates the principal organs of the EU, their structure and powers, the treaty is qualified to be christened as the constitution of Europe12. And if one were to apply the definitions enumerated in the previous section to the Lisbon Treaty, one would construe that the treaty indeed regulates the extent and implementation of political power within the EU and also regulates the social make-up of the institution (democratic nature and foreign policy). Thus it does seem fair, from one vantage point, that the Lisbon Treaty is treated as the constitution of Europe, under a new form.
            
            However, given the depth of the topic, it warrants further investigation of the Lisbon Treaty before drawing a final conclusion.`
        },
        {
            post_id:3,
            title: 'Title 3',
            author: 'Author 3',
            img: 'https://media.istockphoto.com/photos/majestic-oak-tree-at-autumn-sunset-picture-id1189191651?s=2048x2048',
            disc:'long text 3'
        },
        {
            post_id:4,
            title: 'Title 4',
            author: 'Author 1',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            disc:'long text 1'
        },
        {
            post_id:5,
            title: 'Title 5',
            author: 'Author 2',
            img: 'https://media.istockphoto.com/photos/summer-background-low-angle-view-of-tropical-palm-trees-over-clear-picture-id1225394367?s=2048x2048',
            disc:'long text 2'
        },
        {
            post_id:6,
            title: 'Title 6',
            author: 'Author 3',
            img: 'https://media.istockphoto.com/photos/majestic-oak-tree-at-autumn-sunset-picture-id1189191651?s=2048x2048',
            disc:'long text 3'
        },
        {
            post_id:7,
            title: 'Title 7',
            author: 'Author 1',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            disc:'long text 1'
        },
        {
            post_id:8,
            title: 'Title 8',
            author: 'Author 2',
            img: 'https://media.istockphoto.com/photos/summer-background-low-angle-view-of-tropical-palm-trees-over-clear-picture-id1225394367?s=2048x2048',
            disc:'long text 2'
        },
        {
            post_id:9,
            title: 'Title 9',
            author: 'Author 3',
            img: 'https://media.istockphoto.com/photos/majestic-oak-tree-at-autumn-sunset-picture-id1189191651?s=2048x2048',
            disc:'long text 3'
        },
    ];

    const findArticle = ()=>{
        return (data.find(item =>item.post_id === selectedArticle));
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
