import React, { Fragment } from "react";
import { Switch, Route, NavLink, BrowserRouter, HashRouter} from "react-router-dom";
import view from "./ViewComplaint";
import RIC from "./UpdateRIC";
import Progress from "./UpdateProgress";
import "./Main.css";

export default function IconLabelTabs() {

  return (
    <HashRouter>
      <div> 
          <ul className="header">
            <li><NavLink to="/View">View Complaints</NavLink></li>
            <li><NavLink to="/UpdateRIC">Update RIC</NavLink></li>
            <li><NavLink to="/Updateprogress">Update progress of Complaints</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
            <Route path="/View" component={view}/>
            <Route path="/UpdateRIC" component={RIC}/>
            <Route path="/Updateprogress" component={Progress}/>
            </Switch>
          </div>
        </div>
    </HashRouter>
  );
}

