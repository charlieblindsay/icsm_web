import React from 'react';
import {Link} from 'react-router-dom';



function CourseButton(props){
    const navigation_link = 'videos/section' + props.section_number;
    return (
            <Link to={navigation_link} className='section-button__link'>
                <div className="row section-button section-button-white margin-small">
                    <img src={props.thumbnail} alt="" width="40%"/>
                    <div className='text-center'>
                        <h3 className="course-date-text">{props.date}</h3>
                        <h1 className="course-title-text">{props.title}</h1>
                        <h4 className='course-description-text'>{props.description}</h4>
                    </div>
                </div>
            </Link>
    );
}

export default CourseButton;