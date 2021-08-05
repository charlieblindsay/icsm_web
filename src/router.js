import React from "react";
import {
    BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


import HomePage from './pages/HomePage';
import Section from './pages/Section';
import Course from './pages/Course';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';

function App(){
    return (
        <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path='/videos/section1'>
                <Section sectionNumber='1' />
            </Route>
            <Route path='/course'>
                <Course/>
            </Route>
            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
        <Footer />
        </BrowserRouter>

    )
}

export default App;