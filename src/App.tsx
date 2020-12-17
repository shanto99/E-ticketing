import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Search from "./Components/Search";
import SeatDetail from "./Components/SeatDetail";

import Database from "./API/Database";
import Functions from "./API/DBFunctions";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App:React.FC = () => {
    let database = null;
    let [districts, setDistricts] = useState<any>([]);
    useEffect(() => {
        database = new Database();
        let districts = Functions.getDistricts();
        setDistricts(districts);
    },[setDistricts]);
    return (
    <Router>
        <div className="App">
              <Switch>
                  <Route path="/seat-detail">
                      <SeatDetail/>
                  </Route>
                  <Route path="/">
                      <Search districts={districts}/>
                  </Route>
              </Switch>

        </div>
    </Router>
    );
}

export default App;
