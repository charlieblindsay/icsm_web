import React from 'react';

import ButtonPrimary from '../R_components/PrimaryButton';
import {sectionTitles} from '../data/data';
import Footer from '../layout/Footer';

const overviewListItems = ['Interactive exercises', 'Real world projects','Competitions','Weekly drop-in Q&A sessions','Certificate for completion'];
const overviewList = overviewListItems.map(e => <li className='overview__item'>&#10003;&emsp;{e}</li>)

const contentList = sectionTitles.map((e,i) => <li className='content__item'><span className="content__week-text">Week {i+1}:</span>&emsp;<span className="content__course-text">{e}</span></li>)


const html = ( 
<body>
  <div id='mc_embed_signup'>
      <div id="mc_embed_signup_scroll">
        {/* <label htmlFor="mce-EMAIL">Sign up to receive emails about the weekly sections</label>
        <input type="email" name="email" className="email" id="mce-EMAIL" placeholder="email address" required /> */}
        {/* <div className='random-style' aria-hidden="true"><input type="text" name="b_0a53f232d00efbb9af94e3aff_2e38f1c6e6" tabindex="-1" value="" /></div> */}
      </div>
  </div>
  <header className='header'>
    <div className='header__text-box'>
    <h1 className="primary-title">Python Course</h1>
    <h3 className='tertiary-title margin-small'>Teaching the basics of programming for the medical field.</h3>
    </div>
    <div className="header__text-box__btn">
      <ButtonPrimary href='/course' buttonText='Find out more' />
    </div>
  </header>

  <div className="overview">
    <div className='overview__text-box'>
        <h2 className='sub-primary-title'>10 Week Course</h2>
        <h3 className='tertiary-title margin-small'>Build your knowledge from the basics up!</h3>
        <ul className="overview__list">
          {overviewList}
        </ul>
    </div>
  </div>

  <div className="content">
    <div className="content__text-box">
    <h2 className='sub-primary-title'>Course Overview</h2>
    <h3 className='tertiary-title margin-small'>From basics to advanced topics.</h3>
    <ul>
      {contentList}
    </ul>
    </div>
  </div>

  <div className="email">
    <div className="email__text-box">
    <h2 className='sub-primary-title'>Subscribe</h2>
    <span className='paragraph'>Join our mailing list to get reminders of when the course starts and when new sections are released!</span>
    <br/><br/>

    <div className="email__subscribe-container">
    {/* https://mailchi.mp/e913da8be832/icsm-coding-python-course */}
    <a className="btn btn-primary" href="https://mailchi.mp/e913da8be832/icsm-coding-python-course" target="_blank">Subscribe</a>
    {/* <form action="https://app.us5.list-manage.com/subscribe/post?u=2aac43c67462a9b414ade9919&amp;id=9b54b7e643" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary btn-form" /></div>
      </form> */}
    {/* <form action="https://app.us5.list-manage.com/subscribe/post?u=2aac43c67462a9b414ade9919&amp;id=9b54b7e643" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary btn-form" /></div>
    </form> */}
    </div>

    <br/><br/>
    <span className='paragraph'>Key updates and certificates will be distributed through email, so make sure to subscribe!</span>
    </div>
  </div>
  <Footer/>
</body>

);

function HomePage() {
  return (
    html
  );
}

export default HomePage;
