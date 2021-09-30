import React from 'react';


function CourseButtonGrey(props){
    return (
            <div className='section-button__link'>
                <div className="row section-button section-button-grey margin-small">
                    <img src={props.thumbnail} alt="" width="40%"/>
                    <div className='text-center'>
                        <h5 className="course-comingsoon-text">Coming soon...</h5>
                        <h3 className="course-date-text">{props.date}</h3>
                        <h1 className="course-title-text">{props.title}</h1>
                        <h4 className='course-description-text'>{props.description}</h4>
                    </div>
                </div>
                </div>
    );
}

export default CourseButtonGrey;