import React from 'react';

import ButtonPrimary from '../R_components/PrimaryButton';
import {sectionTitles} from '../data/data';

const overviewListItems = ['Interactive exercises', 'Real world projects','Competitions','Weekly drop-in Q&A sessions'];
const overviewList = overviewListItems.map(e => <li className='overview__item'>{e}</li>)

const contentList = sectionTitles.map((e,i) => <li className='content__item'>Week {i+1}: {e}</li>)


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
    <h1 className="primary-title color-blue">Python Course</h1>
    <h1 className="secondary-title color-blue hidden ">
      Autumn Term
    </h1>
    </div>
    <div className="header__text-box__btn">
      <ButtonPrimary href='/course' buttonText='Find out more' />
    </div>
  </header>

  <div className="overview">
    <div className='overview__text-box'>
        <h2 className='secondary-title'>10 Week Course</h2>
        <h3 className='tertiary-title margin-small'>Build your knowledge from the basics</h3>
        <ul>
          {overviewList}
        </ul>
    </div>
  </div>

  <div className="content">
    <div className="content__text-box">
    <h2 className='secondary-title'>Content Overview</h2>
    <ul>
      {contentList}
    </ul>
    </div>
  </div>

  <div className="email">
    <div className="email__text-box">
      <span className='email__span1'>Subscribe</span><span className='paragraph'>to our mailing list so that you never miss when a new section has been released!</span>
    </div>
  </div>
  <form action="https://app.us5.list-manage.com/subscribe/post?u=2aac43c67462a9b414ade9919&amp;id=9b54b7e643" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary btn-form" /></div>
  </form>


  
</body>
);

function HomePage() {
  return (
    html
  );
}

export default HomePage;
