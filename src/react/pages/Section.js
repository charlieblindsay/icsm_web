import React from 'react';
import Video from '../R_components/Video';
import {sectionTitles, sectionLinksList} from '../data/data'
import {Link} from 'react-router-dom';

function Section(props) {
  const videoList = sectionLinksList[parseInt(props.sectionNumber)].map(e => <Video src={e[0]} videoTitle={e[1]} external_link_dict={e[2]} />);
  const srcList = sectionLinksList[parseInt(props.sectionNumber)].map(e => <a className='side-bar-nav__item' href={'#' + e[0]}>{e[1]}</a>);
    return (
      <div className='video-section'>
        <div className="side-bar-nav">
          <h2 className="secondary-title margin-small">Table of Contents</h2>
          {srcList}
        </div>
        <Link className="video-section-link" to="/course"> &lt;&ensp;Back</Link>
        <h3 className='primary-title'>Week {props.sectionNumber}</h3>
        <h2 className='section-primary-title margin-small'>{sectionTitles[props.sectionNumber]}</h2>
        {videoList}
      </div>
    );
  }

export default Section;