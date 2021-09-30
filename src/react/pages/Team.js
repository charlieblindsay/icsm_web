import React from 'react';
import Charlie from '../img/charlie.jpg';
import Diya from '../img/diya.png';
import Jan from '../img/jan.jpg';
import Emike from '../img/emike.jpg';
import Miyu from '../img/miyu.jpeg';
import Laura from '../img/laura.jpg';

function Team(){
    return(
        <div className='photo-section'>
            <div>
            <div className='image-cropper'>
                <img className="profile-pic" src={Charlie} />
            </div>
            <h3 className='image-text'>Charlie - Course Lead &amp; Website</h3>
            </div>
            <div>
            <div className='image-cropper'>
                <img className="profile-pic" src={Diya} />
            </div>
            <h3 className='image-text'>Diya - Section 7 &amp; Publicity</h3>
            </div>
            <div>
            <div className='image-cropper'>
                <img className="profile-pic" src={Jan} />
            </div>
            <h3 className='image-text'>Jan - Section 2 &amp; Website</h3>
            </div>
            <div>
            <div className='image-cropper'>
                <img className="profile-pic" src={Miyu} />
            </div>
            <h3 className='image-text'>Miyu - Section 1, 3 &amp; 6</h3>
            </div>
            <div>
            <div className='image-cropper'>
                <img className="profile-pic" src={Emike} />
            </div>
            <h3 className='image-text'>Emike - Section 1 &amp; 3</h3>
            </div>
            <div>
            <div className='image-cropper'>
                <img className="profile-pic" src={Laura} />
            </div>
            <h3 className='image-text'>Laura - Section 4</h3>
            </div>
        </div>
    );
}

export default Team;


