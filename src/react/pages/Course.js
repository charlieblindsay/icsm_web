import React from 'react';
import CourseButton from '../R_components/CourseButton';
import CourseButtonGrey from '../R_components/CourseButtonGrey';
import {descriptionList, sectionTitles} from '../data/data'

const datesList = ['1st Oct', '8 Oct', 'ipsum', 'ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum',];


const availableList = [1,1,1,1,1,1,1,1,1,1];
const courseButtonsList = datesList.map(function(e, i){
    let section_number_and_date = 'Section ' + (i + 1) + ' - ' + datesList[i];
    if(availableList[i] == 1){
        return <CourseButton section_number={i + 1} date={section_number_and_date} title={sectionTitles[i]} description={descriptionList[i]} />;
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