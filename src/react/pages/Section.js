import React from 'react';
import Video from '../R_components/Video';

const defaultLink = "https://www.youtube.com/embed/17NMhswEpjU";

const section1Links = [[
defaultLink, 'sum to 100'],
[defaultLink, 'agify api']
];

const sectionTitles = ['Variables, printing & conditionals', 'Lists and Dictionaries','Functions','Classes','Error handling & Reading/Writing to files','Data Visualization','Undecided','APIs','Undecided','Undecided'];
const sectionLinksList = [section1Links, section1Links, section1Links, section1Links, section1Links, section1Links, section1Links, section1Links, section1Links, section1Links]

function Section(props) {
  const videoList = sectionLinksList[parseInt(props.sectionNumber)-1].map(e => <Video src={e[0]} videoTitle={e[1]} />);
    return (
      <div>
        <h3 className='tertiary-title'>Section {props.sectionNumber}</h3>
        <h2 className='secondary-title margin-small'>{sectionTitles[props.sectionNumber-1]}</h2>
        {videoList}
      </div>
    );
  }

export default Section;