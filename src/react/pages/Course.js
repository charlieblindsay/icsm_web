import React from 'react';
import CourseButton from '../R_components/CourseButton';
import CourseButtonGrey from '../R_components/CourseButtonGrey';
import {descriptionList, sectionTitles, datesList, availableList} from '../data/data'


const courseButtonsList = datesList.map(function(e, i){
    let section_number_and_date = 'Week ' + (i) + ' - ' + datesList[i];
    if(availableList[i] == 1){
        return <CourseButton section_number={i} date={section_number_and_date} title={sectionTitles[i]} description={descriptionList[i]} />;
    }else{
        return  <CourseButtonGrey date={section_number_and_date} title={sectionTitles[i]} description={descriptionList[i]} />;
    }
});


function Course(){
    return (
        <div className='padding-large'>
            <h2 className="primary-title margin-small">Python Course</h2>
            <div className="center-div">
                <span className='tertiary-title margin-small'>Not yet subscribed to get updates on new releases?</span>
                <br/><br/>
                <a className="btn btn-primary" href="https://mailchi.mp/e913da8be832/icsm-coding-python-course" target="_blank">Subscribe</a>
            </div>
            {courseButtonsList}
        </div>
    );
}

export default Course;