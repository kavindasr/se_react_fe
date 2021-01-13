import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import ComplaintForm from './components/complaint/complaint'
import Aboutus from './components/Aboutus/Aboutus';
import Emergency from './components/Emergency/Emergency'


const App = () => {
  return (
      <Router>
        <Switch>
          <Route path='/complaint' component={ComplaintForm} />
          <Route path='/AboutUs' component={Aboutus} />
          <Route path='/EmergencyNumbers' component={Emergency} />
        </Switch>
      </Router>
  );
}

export default App;
