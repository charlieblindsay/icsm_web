import React from 'react';
import CourseButton from '../R_components/CourseButton';
import CourseButtonGrey from '../R_components/CourseButtonGrey';


const datesList = ['1st Oct', '8 Oct', 'ipsum', 'ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum',];

const titleList = ['Variables, printing & conditionals', 'ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum',];

const descriptionList = ['Introducing python and the basics of programming', 'ipsum', 'ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum', ];

const availableList = [1, 0, 0,0,0,0,0,0,0,0,];

const courseButtonsList = datesList.map(function(e, i){
    if(availableList[i] == 1){
        return <CourseButton date={datesList[i]} title={titleList[i]} description={descriptionList[i]} />;
    }else{
        return  <CourseButtonGrey date={datesList[i]} title={titleList[i]} description={descriptionList[i]} />;
    }
});


function Course(){
    return (
        <div className='padding-page'>
            <h2 className="secondary-title margin-small">Python Course</h2>
            {courseButtonsList}
        </div>
    );
}

export default Course;