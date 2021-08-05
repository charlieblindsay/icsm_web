import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";


import HomePage from './pages/HomePage';
import Section1 from './pages/Section1';

function App(){
    return (
        <Switch>
            <div>
                <Route path='/videos/section1'>
                    <Section1 />
                </Route>
                <Route path='/'>
                    <HomePage />
                </Route>
            </div>
        </Switch>
    )
}

export default App;