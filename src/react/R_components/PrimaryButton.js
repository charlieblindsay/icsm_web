import React from 'react';
import {Link} from 'react-router-dom';

function PrimaryButton(props){
    return (
        <div>
            <Link to={props.href} className='btn btn-primary'>{props.buttonText}</Link>
        </div>
    );
}

export default PrimaryButton;