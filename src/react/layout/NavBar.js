import {Link} from 'react-router-dom';

import React, { Component } from "react";
import classnames from "classnames";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render(){
    return(
        <div className={classnames('navbar', {'navbar--hidden': !this.state.visible})}>
            <ul className="navbar__list">
                <li className="navbar__list-item"><Link to='/'>HOME</Link></li>
                <li className="navbar__list-item"><Link to='/course'>SECTIONS</Link></li>
                <li className="navbar__list-item"><a href='https://mailchi.mp/e913da8be832/icsm-coding-python-course' target="_blank">SUBSCRIBE</a></li>
                <li className="navbar__list-item hidden-small"><a href='https://padlet.com/codingicsm/python_course' target="_blank">COURSE Q &amp; A</a></li>
            </ul>
        </div>
    );
}}