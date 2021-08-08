import React from 'react';
import CourseButton from '../R_components/CourseButton';
import CourseButtonGrey from '../R_components/CourseButtonGrey';


const datesList = ['1st Oct', '8 Oct', 'ipsum', 'ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum',];

const titleList = ['Variables, printing & conditionals', 'Lists and Dictionaries','Functions','Classes','Error handling & Reading/Writing to files','Data Visualization','Undecided','APIs','Undecided','Undecided'];

const descriptionList = ['Introducing python and the basics of programming', 'ipsum', 'ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum','ipsum', ];

const availableList = [1,1,1,1,1,1,1,1,1,1];
const courseButtonsList = datesList.map(function(e, i){
    let section_number_and_date = 'Section ' + (i + 1) + ' - ' + datesList[i];
    if(availableList[i] == 1){
        return <CourseButton section_number={i + 1} date={section_number_and_date} title={titleList[i]} description={descriptionList[i]} />;
    }else{
        return  <CourseButtonGrey date={section_number_and_date} title={titleList[i]} description={descriptionList[i]} />;
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