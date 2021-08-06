import React from 'react';
import {Link} from 'react-router-dom';
import Thumbnail_1 from '../img/thumbnail_1.png';



function CourseButton(props){
    return (
            <Link to='/videos/section1' className='section-button__link'>
                <div className="row section-button margin-small">
                    <img src={Thumbnail_1} alt="" width="50%"/>
                    <div>
                        <h3 className="tertiary-title">{props.date}</h3>
                        <h2 className="secondary-title margin-small">{props.title}</h2>
                        <h4 className='paragraph'>{props.description}</h4>
                    </div>
                </div>
            </Link>
    );
}

export default CourseButton;