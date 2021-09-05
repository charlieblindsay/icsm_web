import React from "react";
import {
    BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


import HomePage from './pages/HomePage';
import Section from './pages/Section';
import Course from './pages/Course';
import NavBar from './layout/NavBar';
import ScrollToTop from "./hooks/ScrollToTop";

function App(){
    return (
        <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Switch>
            <Route path='/videos/section0'>
                <Section sectionNumber='0' />
            </Route>
            <Route path='/videos/section1'>
                <Section sectionNumber='1' />
            </Route>
            <Route path='/videos/section2'>
                <Section sectionNumber='2' />
            </Route>
            <Route path='/videos/section3'>
                <Section sectionNumber='3' />
            </Route>
            <Route path='/videos/section4'>
                <Section sectionNumber='4' />
            </Route>
            <Route path='/videos/section5'>
                <Section sectionNumber='5' />
            </Route>
            <Route path='/videos/section6'>
                <Section sectionNumber='6' />
            </Route>
            <Route path='/videos/section7'>
                <Section sectionNumber='7' />
            </Route>
            <Route path='/videos/section8'>
                <Section sectionNumber='8' />
            </Route>
            <Route path='/course'>
                <Course/>
            </Route>
            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
        </BrowserRouter>

    )
}

export default App;