import React from 'react';
import Video from '../R_components/Video';
import {sectionTitles, sectionLinksList} from '../data/data'

function Section(props) {
  const videoList = sectionLinksList[parseInt(props.sectionNumber)].map(e => <Video src={e[0]} videoTitle={e[1]} external_link_url={e[2]} external_link_title={e[3]} />);
    return (
      <div className='video-section'>
        <h3 className='primary-title'>Section {props.sectionNumber}</h3>
        <h2 className='secondary-title margin-small'>{sectionTitles[props.sectionNumber]}</h2>
        {videoList}
      </div>
    );
  }

export default Section;