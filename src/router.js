import React from "react";
import {
    BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


import HomePage from './pages/HomePage';
import Section1 from './pages/Section1';

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/videos/section1' component={Section1} />
            <Route path='/' component={HomePage} />
        </Switch>
        </BrowserRouter>

    )
}

export default App;