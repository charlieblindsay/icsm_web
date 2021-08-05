import React from 'react';
import Video from '../R_components/Video';
import VideoModel from '../models/VideoModel';

const section1Links = [
['https://www.youtube.com/embed/gMiq50rNOlA', 'sum to 100'],
['https://www.youtube.com/embed/sCbo2WhgwYc', 'agify api']
];

const sectionTitles = ['Variables, printing and conditionals']
const sectionLinksList = [section1Links]

function Section(props) {
  const videoList = sectionLinksList[parseInt(props.sectionNumber)-1].map(e => <Video src={e[0]} videoTitle={e[1]} />);
    return (
      <div>
        <h3 className='tertiary-title'>Section {props.sectionNumber}</h3>
        <h2 className='secondary-title margin-small'>{sectionTitles[props.sectionNumber]}</h2>
        {videoList}
      </div>
    );
  }

export default Section;
