import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Emergency from "./components/Emergency/Emergency";
import NavBar from "./components/NavBar/NavBar";
import LawTalk from "./components/LawTalk/LawTalk";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";
import LoginForm from "./components/Login/Login";
import Home from "./components/Home/Home";
import UserReg from "./components/UserRegistration/UserRegistration";
import Notification from "./components/Notification/Notification";
import Lawyer from "./components/LawEdit/Lawyer";
import IconLabelTabs from "./components/PoliceUI/Main";
import { useCookies } from "react-cookie";
import IrcDeck from "./components/irc/IrcDeck";
//<Notification/>

const App = () => {
  const [cookie, setCookie] = useCookies(["loggedIn"]);
  var val;
  cookie.loggedIn ? (val = cookie.loggedIn.level) : (val = "");
  const [loggedIn, setLoggedIn] = useState(val);
  useEffect(() => {}, []);

  return (
    <Router>
      <NavBar addition={loggedIn} />

      <Switch>
        <Route path="/AboutUs" component={Aboutus} />
        <Route path="/EmergencyNumbers" component={Emergency} />
        <Route path="/lawTalk" component={LawTalk} />
        <Route path="/complaint" component={ComplaintForm} />
        <Route
          path="/Login"
          render={(props) => (
            <LoginForm {...props} handleLog={(i) => setLoggedIn(i)} />
          )}
        />
        <Route path="/ircDeck" component={IrcDeck} />
        <Route path="/Register" component={UserReg} />
        <Route path="/lawyer">
          {loggedIn === 1 ? <Lawyer /> : <Redirect to="/" />}
        </Route>
        <Route path="/police">
          {loggedIn === 2 ? <IconLabelTabs /> : <Redirect to="/" />}
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
