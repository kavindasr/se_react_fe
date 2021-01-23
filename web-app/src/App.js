import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Redirect,Route, Switch } from 'react-router-dom'
import Aboutus from './components/Aboutus/Aboutus';
import Emergency from './components/Emergency/Emergency';
import NavBar from './components/NavBar/NavBar';
import LawTalk from './components/LawTalk/LawTalk';
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";
import LoginForm from "./components/Login/Login"
import Home from "./components/Home/Home"
import registration from "./components/RegistrationForm/RegistrationForm"
import Notification from "./components/Notification/Notification";
import Comp from "./components/sampleCom/Comp";
import Lawyer from "./components/LawEdit/Lawyer";
import IconLabelTabs from "./components/PoliceUI/Main";
import {useCookies} from 'react-cookie';
//<Notification/>
const App = () => {
  const [cookie,setCookie] = useCookies(['loggedIn']);
  const [loggedIn,setLoggedIn] = useState('');
  console.log(cookie);
  console.log(loggedIn,'heee')
  useEffect(()=>{
    if(cookie.loggedIn){
      setLoggedIn(cookie.loggedIn.level);
    }
  },[])

  return (
    <Router>
      <NavBar 
        addition={loggedIn}
      />
      
      <Switch>
        <Route path='/AboutUs' component={Aboutus} />
        <Route path='/EmergencyNumbers' component={Emergency} />
        <Route path='/lawTalk' component={LawTalk} />
        <Route path='/complaint' component={ComplaintForm} />
        <Route path="/login" render={(props) => <LoginForm {...props} handleLog={(i)=>setLoggedIn(i)}/>} />
        <Route path='/Home' component={Home} />
        <Route path='/Register' component={registration} />
        <Route path='/lawyer'>{loggedIn===1? <Lawyer/>: <Redirect to='/'/>}</Route> 
        <Route path='/' component={Home} />
        <Route path='/Tab' component={IconLabelTabs} />
      </Switch>
    </Router>
  );
}

export default App;
