import './css/main.css';
import './css/fonts.css';
import React from 'react';
import Logo from './img/icsm-logo.png';

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

const html = ( 
<body>
  <header className='header'>
    <div className='header__text-box'>
    <h1 className="primary-title color-blue">Python Course</h1>
    <h1 className="primary-title color-blue margin-big ">
      Autumn Term
    </h1>
<a href='#' className='btn btn-primary'>SIGN UP</a>
    </div>
  </header>

  <div className="overview">
    <div className='overview__text-box'>
        <h2 className='secondary-title'>10 Week Course</h2>
        <h3 className='tertiary-title'>Build you knowledge from the basics</h3>
        <ul>
          <li>Interactive exercises</li>
          <li>Real world projects</li>
          <li>Competitions</li>
          <li>Weekly drop-in Q&A sessions</li>
        </ul>
    </div>
  </div>

  <div className='structure'>
    <ul className='structure__course-buttons'>
    <h2 className="secondary-title margin-small">Course structure 2021</h2>
      <li><a href="" className="btn btn-course">Section 1</a></li>
      <li><a href="" className="btn btn-course">Section 1</a></li>
      <li><a href="" className="btn btn-course">Section 1</a></li>
      <li><a href="" className="btn btn-course">Section 1</a></li>
      <li><a href="" className="btn btn-course">Section 1</a></li>
    </ul>
  </div>

  <div className="signup">
    <div className="row">
      <div className="row-item">
      <h1 className="primary-title margin-medium">All abilities are welcome</h1>
    <a href="" className="btn btn-primary">Sign up</a>
      </div>
      <div className="row-item">
      </div>
    </div>
  </div>

  <footer className="footer">
    <img src={Logo} alt="" width="30%"/>
    <hr></hr>
    <ul className="row">
      <li><a href="">hello</a><a href="">hello</a><a href="">hello</a></li>
    </ul>
  </footer>

</body>
);

function App() {
  return (
    head,
    html
  );
}

export default App;
