import React from 'react';
import Thumbnail_1 from '../img/thumbnail_1.png';

function CourseButtonGrey(props){
    return (
            <div className='section-button__link'>
                <div className="row section-button-grey margin-small">
                    <img src={Thumbnail_1} alt="" width="50%"/>
                    <div>
                        <h3 className="tertiary-title">{props.date}</h3>
                        <h2 className="secondary-title margin-small">{props.title}</h2>
                        <h5>{props.description}</h5>
                        <h3 className="tertiary-title">Coming soon</h3>
                    </div>
                </div>
                </div>
    );
}

export default CourseButtonGrey;