import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
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

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Notification/>
      <Switch>
        <Route path='/AboutUs' component={Aboutus} />
        <Route path='/EmergencyNumbers' component={Emergency} />
        <Route path='/lawTalk' component={LawTalk} />
        <Route path='/complaint' component={ComplaintForm} />
        <Route path='/Login' component={LoginForm} />
        <Route path='/Home' component={Home} />
        <Route path='/Register' component={registration} />
        <Route path='/' component={Comp} />
      </Switch>
    </Router>
  );
}

export default App;