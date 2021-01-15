import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Aboutus from './components/Aboutus/Aboutus';
import Emergency from './components/Emergency/Emergency';
import NavBar from './components/NavBar/NavBar';
import LawTalk from './components/LawTalk/LawTalk';
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/AboutUs' component={Aboutus} />
        <Route path='/EmergencyNumbers' component={Emergency} />
        <Route path='/lawTalk' component={LawTalk} />
        <Route path='/complaint' component={ComplaintForm} />
      </Switch>
    </Router>
  );
}

export default App;