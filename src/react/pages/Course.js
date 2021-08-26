import React from 'react';
import CourseButton from '../R_components/CourseButton';
import CourseButtonGrey from '../R_components/CourseButtonGrey';
import {descriptionList, sectionTitles, datesList, availableList} from '../data/data'


const courseButtonsList = datesList.map(function(e, i){
    let section_number_and_date = 'Section ' + (i) + ' - ' + datesList[i];
    if(availableList[i] == 1){
        return <CourseButton section_number={i} date={section_number_and_date} title={sectionTitles[i]} description={descriptionList[i]} />;
    }else{
        return  <CourseButtonGrey date={section_number_and_date} title={sectionTitles[i]} description={descriptionList[i]} />;
    }
});


function Course(){
    return (
        <div className='padding-large'>
            <h2 className="secondary-title margin-small">Python Course</h2>
            {courseButtonsList}
        </div>
    );
}

export default Course;