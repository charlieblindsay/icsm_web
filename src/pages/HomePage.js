import React from 'react';
import '../css/main.css';
import '../css/fonts.css';
import Logo from '../img/icsm-logo.png';

import {Link} from 'react-router-dom';

const head = (
  <head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta
    name="description"
    content="ICSM Coding App Description"
  />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  {/* Google fonts */}

  <title>ICSM Coding</title>
</head>
);

const overviewListItems = ['Interactive exercises', 'Real world projects','Competitions','Weekly drop-in Q&A sessions'];
const overviewList = overviewListItems.map(e => <li className='overview__item'>{e}</li>)

const html = ( 
<body>
  <header className='header'>
    <div className='header__text-box'>
    <h1 className="primary-title color-blue">Python Course</h1>
    <h1 className="secondary-title color-blue margin-big hidden ">
      Autumn Term
    </h1>
      <Link to='/videos/section1'>Section 1</Link>
<a href='#' className='btn btn-primary'>SIGN UP</a>
    </div>
  </header>

  <div className="overview">
    <div className='overview__text-box'>
        <h2 className='secondary-title'>10 Week Course</h2>
        <h3 className='tertiary-title margin-small'>Build you knowledge from the basics</h3>
        <ul>
          {overviewList}
        </ul>
    </div>
  </div>

  <footer className="footer">
    <img src={Logo} alt="" height="60%"/>
    <hr className='hr-footer'></hr>
    <ul className="footer__list">
      <li className="footer__item"><a href="" className="footer__link">icsm coding</a></li>
      <li className="footer__item"><a href="" className="footer__link">contact</a></li>
      <li className="footer__item"><a href="" className="footer__link">team</a></li>
    </ul>
  </footer>
  


</body>
);

function HomePage() {
  return (
    head,
    html
  );
}

export default HomePage;
