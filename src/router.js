import React from "react";
import {
    BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


import HomePage from './pages/HomePage';
import Section from './pages/Section';

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/videos/section1'>
                <Section sectionNumber='1' />
            </Route>
            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
        </BrowserRouter>

    )
}

export default App;