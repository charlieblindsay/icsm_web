import React from 'react';
import Thumbnail_1 from '../img/thumbnail_1.png';

function CourseButtonGrey(props){
    return (
            <div className='section-button__link'>
                <div className="row section-button section-button-grey margin-small">
                    <img src={Thumbnail_1} alt="" width="50%"/>
                    <div className='text-center'>
                        <h3 className="tertiary-title">{props.date}</h3>
                        <h2 className="secondary-title margin-small">{props.title}</h2>
                        <h4 className='paragraph'>{props.description}</h4>
                        <h1>Currently Unavailable</h1>
                    </div>
                </div>
                </div>
    );
}

export default CourseButtonGrey;