import React from 'react';
import Video from '../R_components/Video';

const defaultLink = "https://www.youtube.com/embed/17NMhswEpjU";

const section1Links = [
[defaultLink, 'Introduction to Section 1'],
[defaultLink, 'Printing to the console'],
[defaultLink, 'Data types'],
[defaultLink, 'Variables'],
[defaultLink, 'Input functions'],
[defaultLink, 'f-strings'],
[defaultLink, 'f-string challenge'],
[defaultLink, 'Mathematical operators'],
[defaultLink, 'Mathematical operators challenge'],
[defaultLink, 'Conditionals'],
[defaultLink, 'Divisibility checker solution'],
[defaultLink, 'Leap year challenge solution'],
];

const section2Links = [
  [defaultLink, 'Introduction to Section 2'],
  [defaultLink, 'Concept of Lists'],
  [defaultLink, 'Accessing elements in a list'],
  [defaultLink, 'Useful list methods'],
  [defaultLink, 'Concept of for loops'],
  [defaultLink, 'Printing elements of a list with a for loop'],
  [defaultLink, 'Finding sum of elements in a list with a for loop'],
  [defaultLink, 'Solution to multiplication challenge'],
  [defaultLink, 'Using the range function with for loops'],
  [defaultLink, 'Sum to even numbers from 0 to 100 challenge solution'],
  [defaultLink, 'Concept of dictionaries'],
  [defaultLink, 'Difference between dictionaries and lists'],
  [defaultLink, 'Retreiving, adding and removing data from a dictionary'],
  [defaultLink, 'Nested dictionaries'],
  [defaultLink, 'JSON'],
  ];

const section3Links = [
    [defaultLink, 'Introduction to Section 3'],
    [defaultLink, 'Concept of functions'],
    [defaultLink, 'Functions without arguments'],
    [defaultLink, 'Functions with arguments'],
    [defaultLink, 'Difference between positional arguments and key word arguments'],
    [defaultLink, 'Introduction to hangman challenge'],
    [defaultLink, 'Solution to hangman (MULTIPLE VIDEOS)'],
]

const section4Links = [
  [defaultLink, 'Introduction to Section 4'],
  [defaultLink, 'Why is OOP useful?'],
  [defaultLink, 'Concept of classes and objects'],
  [defaultLink, 'Instantiating objects and accessing their attributes and methods'],
  [defaultLink, 'Mini Challenge solution'],
  [defaultLink, 'Introduction to PHQ challenge'],
  [defaultLink, 'Solution to PHQ challenge (MULTIPLE VIDEOS)'],
]

const section5Links = [
  [defaultLink, 'Introduction to Section 5'],
  [defaultLink, 'Catching different types of exceptions'],
  [defaultLink, 'Raising your own exceptions'],
  [defaultLink, 'Challenge: Exception Handling'],
  [defaultLink, 'Reading a text file'],
  [defaultLink, 'Writing to a text file'],
  [defaultLink, 'File not found exception'],
  [defaultLink, 'Changing email template Challenge explanation'],
  [defaultLink, 'Challenge solution'],
  [defaultLink, 'Organs guessing game challenge'],
  [defaultLink, 'Organs guessing game solution'],
]

const section6Links = [
  [defaultLink, 'Introduction to Section 6'],
  [defaultLink, 'Downloading alcohol data and moving file to correct folder'],
  [defaultLink, 'Displaying data in jupyter notebook'],
  [defaultLink, 'Pandas DataFrame and Series'],
  [defaultLink, 'Smaller DataFrame Example'],
  [defaultLink, 'Cleaning data: Changing column names'],
  [defaultLink, 'Cleaning data: Removing unnecessary data'],
  [defaultLink, 'Accessing a specific row in the alcohol dataframe as a list'],
  [defaultLink, 'Plotting a bar graph with matplotlib and numpy'],
  [defaultLink, 'Challenge: How global alcohol consumption has varied'],
  [defaultLink, 'Plotting pie chart to show share of alcohol consumption between different types'],
  [defaultLink, 'Introduction to blood pressure data & columns challenge'],
  [defaultLink, 'Data Cleaning: Altering values in a dataframe'],
  [defaultLink, 'Challenge: Data Visualization'],
]

const section7Links = [
  [defaultLink, 'Introduction to Section 7'],
  [defaultLink, ''],
]

const section8Links = [
  [defaultLink, 'Introduction to Section 8'],
  [defaultLink, 'Concept of Application Programming Interfaces (APIs)'],
  [defaultLink, 'Kanye: quote generator in browser'],
  [defaultLink, 'Kanye: Making a basic get request in PyCharm'],
  [defaultLink, 'Agify: Get requests with parameters'],
  [defaultLink, 'Agify in Pycharm'],
  [defaultLink, 'Challenge: Genderize'],
  [defaultLink, 'Nutritionix 1'],
  [defaultLink, 'Nutritionix 2'],
  [defaultLink, 'Nutritionix 3'],
  [defaultLink, 'Nutritionix 4'],
  [defaultLink, 'Nutritionix 5'],
]

const section9Links = [
  [defaultLink, 'Introduction to Section 9'],
  [defaultLink, ''],
]

const section10Links = [
  [defaultLink, 'Introduction to Section 10'],
  [defaultLink, ''],
]

const sectionTitles = ['Variables, printing & conditionals', 'Lists, Loops and Dictionaries','Functions','Classes and Object Orientated Programming','Error handling & Reading/Writing to files','Data Visualization','Undecided','APIs','Undecided','Undecided'];
const sectionLinksList = [section1Links, section2Links, section3Links, section4Links, section5Links, section6Links, section7Links, section8Links, section9Links, section10Links]

function Section(props) {
  const videoList = sectionLinksList[parseInt(props.sectionNumber)-1].map(e => <Video src={e[0]} videoTitle={e[1]} />);
    return (
      <div>
        <h3 className='tertiary-title'>Section {props.sectionNumber}</h3>
        <h2 className='secondary-title margin-small'>{sectionTitles[props.sectionNumber-1]}</h2>
        {videoList}
      </div>
    );
  }

export default Section;